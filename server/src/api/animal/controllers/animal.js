"use strict";

const dayjs = require("dayjs");
/**
 * animal controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::animal.animal", ({ strapi }) => ({
  async getAnimalInfo(ctx) {
    const { petid } = ctx.params;
    const animal = await strapi
      .service("api::animal.animal")
      .findOne(petid, { populate: ["images"] });
    const diseases = await strapi.entityService.findMany(
      "api::disease.disease"
    );
    const isolations = await strapi.entityService.findMany(
      "api::isolation.isolation",
      {
        filters: {
          animal: petid,
        },
        populate: ["animal"],
      }
    );
    const petDiseases = await strapi.entityService.findMany(
      "api::pet-disease.pet-disease",
      {
        filters: {
          animal: petid,
        },
        populate: ["animal", "disease"],
      }
    );
    const animalItem = {
      animal: this.transformResponse(animal),
      diseases: this.transformResponse(diseases),
      isolations: this.transformResponse(isolations),
      petDiseases: this.transformResponse(petDiseases),
    };
    return animalItem;
  },

  async getStats() {
    try {
      const animals = await strapi.entityService.findMany("api::animal.animal");

      const ageStats = [];
      ageStats.push([
        "Młode",
        animals.filter(
          (animal) =>
            dayjs().diff(animal.birthDate, "year") <= 3 &&
            dayjs().diff(animal.birthDate, "year") >= 0
        ).length,
      ]);
      ageStats.push([
        "Dorosłe",
        animals.filter(
          (animal) =>
            dayjs().diff(animal.birthDate, "year") <= 10 &&
            dayjs().diff(animal.birthDate, "year") >= 4
        ).length,
      ]);
      ageStats.push([
        "Stare",
        animals.filter((animal) => dayjs().diff(animal.birthDate, "year") >= 11)
          .length,
      ]);

      const speciesStats = [];
      speciesStats.push([
        "Psy",
        animals.filter((animal) => animal.species === "Pies").length,
      ]);
      speciesStats.push([
        "Koty",
        animals.filter((animal) => animal.species === "Kot").length,
      ]);

      const genderStats = [];
      genderStats.push([
        "Samce",
        animals.filter((animal) => animal.sex === "Samiec").length,
      ]);
      genderStats.push([
        "Samice",
        animals.filter((animal) => animal.sex === "Samica").length,
      ]);

      const statusStats = [];
      statusStats.push([
        "Adoptowane",
        animals.filter((animal) => animal.adopted === true).length,
      ]);
      statusStats.push([
        "Izolowane",
        animals.filter((animal) => animal.isIsolated === true).length,
      ]);
      statusStats.push([
        "Chore",
        animals.filter((animal) => animal.isIll === true).length,
      ]);

      const weightStats = [];
      animals.forEach((animal) => {
        if (animal.weight < 5) {
          weightStats.find((weight) => weight[0] === "Lekkie")
            ? weightStats.find((weight) => weight[0] === "Lekkie")[1]++
            : weightStats.push(["Lekkie", 1]);
        }
        if (animal.weight >= 5 && animal.weight <= 14) {
          weightStats.find((weight) => weight[0] === "Średnie")
            ? weightStats.find((weight) => weight[0] === "Średnie")[1]++
            : weightStats.push(["Średnie", 1]);
        }
        if (animal.weight >= 15 && animal.weight <= 24) {
          weightStats.find((weight) => weight[0] === "Ciężkie")
            ? weightStats.find((weight) => weight[0] === "Ciężkie")[1]++
            : weightStats.push(["Ciężkie", 1]);
        }
        if (animal.weight >= 25 && animal.weight <= 34) {
          weightStats.find((weight) => weight[0] === "Bardzo ciężkie")
            ? weightStats.find((weight) => weight[0] === "Bardzo ciężkie")[1]++
            : weightStats.push(["Bardzo ciężkie", 1]);
        }
        if (animal.weight >= 35) {
          weightStats.find((weight) => weight[0] === "Ogromne")
            ? weightStats.find((weight) => weight[0] === "Ogromne")[1]++
            : weightStats.push(["Ogromne", 1]);
        }
      });
      const raceStats = [];
      animals.forEach((animal) => {
        const existingRace = raceStats.find((race) => race[0] === animal.race);
        if (existingRace) {
          existingRace[1] += 1;
        } else {
          raceStats.push([animal.race, 1]);
        }
      });
      const admittedAnimals = [];
      animals.forEach((animal) => {
        const existingAdmission = admittedAnimals.find(
          (admission) =>
            admission[0] === dayjs(animal.dateOfAdmission).format("YYYY-MM-DD")
        );
        if (existingAdmission) {
          existingAdmission[1] += 1;
        } else {
          admittedAnimals.push([
            dayjs(animal.dateOfAdmission).format("YYYY-MM-DD"),
            1,
          ]);
        }
      });

      admittedAnimals.sort((a, b) =>
        dayjs(a[0]).isAfter(dayjs(b[0])) ? 1 : -1
      );

      const animalsStats = {
        ageStats,
        speciesStats,
        genderStats,
        statusStats,
        weightStats,
        raceStats,
        admittedAnimals,
      };
      return animalsStats;
    } catch (err) {
      console.log(err);
    }
  },
}));
