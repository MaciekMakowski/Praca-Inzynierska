"use strict";
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
/**
 * volunteer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const days = {
  Monday: "Poniedziałek",
  Tuesday: "Wtorek",
  Wednesday: "Środa",
  Thursday: "Czwartek",
  Friday: "Piątek",
  Saturday: "Sobota",
  Sunday: "Niedziela",
};
const SexCalc = (volunteer, volunteersSex) => {
  const existingSex = volunteersSex.find(
    (sex) => sex[0] === volunteer.personData.sex
  );
  if (existingSex) {
    existingSex[1] += 1;
  } else {
    volunteersSex.push([volunteer.personData.sex, 1]);
  }
};

const AgeCalc = (volunteer, volunteersAges) => {
  const age = dayjs().diff(dayjs(volunteer.personData.birthDate), "year");
  const existingAge = volunteersAges.find((ageFreq) => ageFreq[0] === age);
  if (existingAge) {
    existingAge[1] += 1;
  } else {
    volunteersAges.push([age, 1]);
  }
};

const visitMonthCalc = (volunteerVisit, volunteersVisitsByMonth) => {
  const existingMonth = volunteersVisitsByMonth.find(
    (visit) => visit[0] === dayjs(volunteerVisit.visit.date).format("YYYY-MM")
  );
  if (dayjs(volunteerVisit.visit.date).isAfter(dayjs().subtract(1, "year"))) {
    if (existingMonth) {
      existingMonth[1] += 1;
    } else {
      volunteersVisitsByMonth.push([
        dayjs(volunteerVisit.visit.date).format("YYYY-MM"),
        1,
      ]);
    }
  }
};

const visitSexCalc = (volunteerVisit, volunteersVistsBySex) => {
  const existingSex = volunteersVistsBySex.find(
    (visit) => visit[0] === volunteerVisit.person.personData.sex
  );
  if (existingSex) {
    existingSex[1] += 1;
  } else {
    volunteersVistsBySex.push([volunteerVisit.person.personData.sex, 1]);
  }
};

const visitFilteredByDays = (volunteerVisit, volunteersVisitsByDays) => {
  const existingDay = volunteersVisitsByDays.find(
    (visit) => visit[0] === days.dayjs(volunteerVisit.visit.date).format("dddd")
  );

  if (existingDay) {
    existingDay[1] += 1;
  } else {
    volunteersVisitsByDays.push([
      days[dayjs(volunteerVisit.visit.date).format("dddd")],
      1,
    ]);
  }
};

const visitMeanTimeBySexCalc = (
  volunteerVisit,
  volunteersVisitsMeanBySexTime
) => {
  const exsistingSex = volunteersVisitsMeanBySexTime.find(
    (sex) => sex[0] === volunteerVisit.person.personData.sex
  );

  const time = dayjs(volunteerVisit.visit.exitTime, "HH:mm:ss").diff(
    dayjs(volunteerVisit.visit.enterTime, "HH:mm:ss"),
    "hours"
  );
  if (exsistingSex) {
    exsistingSex[1] += time;
  } else {
    volunteersVisitsMeanBySexTime.push([
      volunteerVisit.person.personData.sex,
      time,
    ]);
  }
};
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
