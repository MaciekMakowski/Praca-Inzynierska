"use strict";

const dayjs = require("dayjs");

/**
 * disease controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::disease.disease", ({ strapi }) => ({
  async getStats() {
    const petDiseases = await strapi.entityService.findMany(
      "api::pet-disease.pet-disease",
      {
        populate: ["disease", "animal"],
      }
    );

    let diseasesFreq = [];
    petDiseases.forEach((petDisease) => {
      const disease = petDisease.disease;
      const existingDisease = diseasesFreq.find(
        (diseaseFreq) => diseaseFreq[0] === disease.name
      );
      if (existingDisease) {
        existingDisease[1] += 1;
      } else {
        diseasesFreq.push([disease.name, 1]);
      }
    });

    let diseasesByMonth = [];
    petDiseases.forEach((petDisease) => {
      const existingMonth = diseasesByMonth.find(
        (disease) =>
          disease[0] === dayjs(petDisease.startDate).format("YYYY-MM")
      );
      if (dayjs(petDisease.startDate).isAfter(dayjs().subtract(1, "year"))) {
        if (existingMonth) {
          existingMonth[1] += 1;
        } else {
          diseasesByMonth.push([
            dayjs(petDisease.startDate).format("YYYY-MM"),
            1,
          ]);
        }
      }
    });

    let meanTimeForDisease = [];
    petDiseases.forEach((petDisease) => {
      const existingDisease = meanTimeForDisease.find(
        (disease) => disease[0] === petDisease.disease.name
      );
      if (existingDisease) {
        existingDisease[1] += dayjs(petDisease.endDate).diff(
          dayjs(petDisease.startDate),
          "day"
        );
      } else {
        meanTimeForDisease.push([
          petDisease.disease.name,
          dayjs(petDisease.endDate).diff(dayjs(petDisease.startDate), "day"),
        ]);
      }
    });
    meanTimeForDisease.forEach((disease) => {
      disease[1] = Math.round(
        disease[1] /
          diseasesFreq.find((diseaseFreq) => diseaseFreq[0] === disease[0])[1]
      );
    });

    let longestTimeForDisease = [];
    petDiseases.forEach((petDisease) => {
      const existingDisease = longestTimeForDisease.find(
        (disease) => disease[0] === petDisease.disease.name
      );
      if (existingDisease) {
        const days = dayjs(petDisease.endDate).diff(
          dayjs(petDisease.startDate),
          "day"
        );
        if (days > existingDisease[1]) {
          existingDisease[1] = days;
        }
      } else {
        longestTimeForDisease.push([
          petDisease.disease.name,
          dayjs(petDisease.endDate).diff(dayjs(petDisease.startDate), "day"),
        ]);
      }
    });
    const diseaseStats = {
      diseasesFreq,
      diseasesByMonth,
      meanTimeForDisease,
      longestTimeForDisease,
    };
    return diseaseStats;
  },
}));
