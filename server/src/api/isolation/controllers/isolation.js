"use strict";
const dayjs = require("dayjs");
/**
 * isolation controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::isolation.isolation",
  ({ strapi }) => ({
    async createNew(ctx) {
      const isolationData = ctx.request.body.data;
      const date = new Date();

      try {
        const isolation = await strapi.entityService.create(
          "api::isolation.isolation",
          { data: isolationData, populate: ["animal"] }
        );
        const populateIsolation = await strapi.entityService.update(
          "api::isolation.isolation",
          isolation.id,
          { data: { publishedAt: date } }
        );
        const animal = isolation.animal.id;
        await strapi.entityService.update("api::animal.animal", animal, {
          data: { isIsolated: true },
        });

        return populateIsolation;
      } catch (error) {
        ctx.response.status = 500;
        return { error: "Wystąpił błąd podczas dodawania izolacji." };
      }
    },

    async update(ctx) {
      const isolationData = ctx.request.body.data;
      const isolationId = ctx.params.id;
      try {
        const newIsolation = await strapi.entityService.update(
          "api::isolation.isolation",
          isolationId,
          { data: isolationData }
        );
        const animal = isolationData.animal;
        if (
          isolationData.status === "Zakończona" ||
          isolationData.status === "Anulowana"
        ) {
          await strapi.entityService.update("api::animal.animal", animal, {
            data: { isIsolated: false },
          });
        } else {
          await strapi.entityService.update("api::animal.animal", animal, {
            data: { isIsolated: true },
          });
        }
        return newIsolation;
      } catch {
        ctx.response.status = 500;
        return { error: "Wystąpił błąd podczas dodawania izolacji." };
      }
    },

    async getStats() {
      const petIsolations = await strapi.entityService.findMany(
        "api::isolation.isolation",
        {
          populate: ["animal"],
        }
      );

      let isolationsFreq = [];
      petIsolations.forEach((petIsolation) => {
        const isolation = petIsolation.animal;
        const existingIsolation = isolationsFreq.find(
          (isolationFreq) => isolationFreq[0] === isolation.name
        );
        if (existingIsolation) {
          existingIsolation[1] += 1;
        } else {
          isolationsFreq.push([isolation.name, 1]);
        }
      });

      let isolationsByMonth = [];
      petIsolations.forEach((petIsolation) => {
        const existingMonth = isolationsByMonth.find(
          (isolation) =>
            isolation[0] === dayjs(petIsolation.startDate).format("YYYY-MM")
        );
        if (
          dayjs(petIsolation.startDate).isAfter(dayjs().subtract(1, "year"))
        ) {
          if (existingMonth) {
            existingMonth[1] += 1;
          } else {
            isolationsByMonth.push([
              dayjs(petIsolation.startDate).format("YYYY-MM"),
              1,
            ]);
          }
        }
      });
      isolationsByMonth.sort((a, b) => {
        return dayjs(a[0]).isAfter(dayjs(b[0])) ? 1 : -1;
      });

      let meanTimeForIsolation = [];
      petIsolations.forEach((petIsolation) => {
        const existingIsolation = meanTimeForIsolation.find(
          (isolation) => isolation[0] === petIsolation.animal.name
        );
        if (existingIsolation) {
          existingIsolation[1] += dayjs(petIsolation.endDate).diff(
            dayjs(petIsolation.startDate),
            "day"
          );
        } else {
          meanTimeForIsolation.push([
            petIsolation.animal.name,
            dayjs(petIsolation.endDate).diff(
              dayjs(petIsolation.startDate),
              "day"
            ),
          ]);
        }
      });
      meanTimeForIsolation.forEach((isolation) => {
        isolation[1] = Math.round(
          isolation[1] /
            isolationsFreq.find(
              (isolationFreq) => isolationFreq[0] === isolation[0]
            )[1]
        );
      });

      return {
        isolationsFreq,
        isolationsByMonth,
        meanTimeForIsolation,
      };
    },
  })
);
