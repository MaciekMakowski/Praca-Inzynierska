"use strict";
const dayjs = require("dayjs");
/**
 * guest controller
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

module.exports = createCoreController("api::guest.guest", ({ strapi }) => ({
  async getStats() {
    const guests = await strapi.entityService.findMany("api::guest.guest", {
      populate: ["personData"],
    });
    const guestsVisits = await strapi.entityService.findMany(
      "api::guest-visit.guest-visit",
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
    const guestsAges = [];
    const guestsSex = [];
    guests.forEach((guest) => {
      AgeCalc(guest, guestsAges);
      SexCalc(guest, guestsSex);
    });
    guestsAges.sort((a, b) => a[0] - b[0]);

    const guestsVisitsByMonth = [];
    const guestsVisitsBySex = [];
    const guestsVisitsByDays = [];
    let guestsVisitsMeanTimeBySex = [];
    guestsVisits.forEach((guestVisit) => {
      visitMonthCalc(guestVisit, guestsVisitsByMonth);
      visitSexCalc(guestVisit, guestsVisitsBySex);
      visitFilteredByDays(guestVisit, guestsVisitsByDays);
      visitMeanTimeBySexCalc(guestVisit, guestsVisitsMeanTimeBySex);
    });
    guestsVisitsByMonth.sort((a, b) =>
      dayjs(a[0]).isAfter(dayjs(b[0])) ? 1 : -1
    );
    guestsVisitsMeanTimeBySex.forEach((VisitsSex) => {
      const quantity = guestsVisitsBySex.find((sex) => sex[0] === VisitsSex[0]);
      const result = VisitsSex[1] / quantity[1];
      if (result) VisitsSex[1] = result;
      else VisitsSex[1] = 0;
    });

    return {
      guestsAges,
      guestsSex,
      guestsVisitsByMonth,
      guestsVisitsBySex,
      guestsVisitsByDays,
      guestsVisitsMeanTimeBySex,
    };
  },
}));
