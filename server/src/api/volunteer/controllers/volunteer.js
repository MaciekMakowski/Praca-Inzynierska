"use strict";
const dayjs = require("dayjs");
/**
 * volunteer controller
 */
const {
  SexCalc,
  AgeCalc,
  visitMonthCalc,
  visitSexCalc,
  visitFilteredByDays,
  visitMeanTimeBySexCalc,
  days,
} = require("../../../utils/helpers");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::volunteer.volunteer",
  ({ strapi }) => ({
    async getStats() {
      const volunteers = await strapi.entityService.findMany(
        "api::volunteer.volunteer",
        { populate: ["personData"] }
      );
      const volunteersVisits = await strapi.entityService.findMany(
        "api::volunteer-visit.volunteer-visit",
        {
          populate: {
            person: {
              populate: ["personData"],
            },
            visit: {
              populate: "*",
            },
          },
        }
      );
      const volunteersAges = [];
      const volunteersSex = [];
      volunteers.forEach((volunteer) => {
        AgeCalc(volunteer, volunteersAges);
        SexCalc(volunteer, volunteersSex);
      });
      volunteersAges.sort((a, b) => a[0] - b[0]);

      const volunteersVisitsByMonth = [];
      const volunteersVisitsBySex = [];
      const volunteersVisitsByDays = [];
      const volunteersVisitsMeanTimeBySex = [];
      volunteersVisits.forEach((volunteerVisit) => {
        visitMonthCalc(volunteerVisit, volunteersVisitsByMonth);
        visitSexCalc(volunteerVisit, volunteersVisitsBySex);
        visitFilteredByDays(volunteerVisit, volunteersVisitsByDays);
        visitMeanTimeBySexCalc(volunteerVisit, volunteersVisitsMeanTimeBySex);
      });
      volunteersVisitsByMonth.sort((a, b) =>
        dayjs(a[0]).isAfter(dayjs(b[0])) ? 1 : -1
      );
      volunteersVisitsMeanTimeBySex.forEach((VisitsSex) => {
        const sex = volunteersSex.find((sex) => sex[0] === VisitsSex[0]);
        const result = volunteersVisitsMeanTimeBySex[1] / sex[1];
        if (result) volunteersVisitsMeanTimeBySex[1] = result;
      });

      return {
        volunteersAges,
        volunteersSex,
        volunteersVisitsByMonth,
        volunteersVisitsBySex,
        volunteersVisitsByDays,
        volunteersVisitsMeanTimeBySex,
      };
    },
  })
);
