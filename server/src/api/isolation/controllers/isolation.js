"use strict";

/**
 * isolation controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::isolation.isolation",
  ({ strapi }) => ({
    async createNew(ctx) {
      // Pobierz dane o izolacji z zapytania
      const isolationData = ctx.request.body.data;
      const date = new Date();

      try {
        // Dodaj nową izolację do bazy danych
        const isolation = await strapi.entityService.create(
          "api::isolation.isolation",
          { data: isolationData, populate: ["animal"] }
        );
        const populateIsolation = await strapi.entityService.update(
          "api::isolation.isolation",
          isolation.id,
          { data: { publishedAt: date } }
        );
        // Pobierz identyfikator zwierzęcia z relacji
        const animal = isolation.animal.id;
        // Zmień status zwierzęcia na izolowane
        await strapi.entityService.update("api::animal.animal", animal, {
          data: { isIsolated: true },
        });

        // Zwróć nową izolację
        return populateIsolation;
      } catch (error) {
        // Obsłuż błędy, jeśli istnieją
        ctx.response.status = 500; // lub inny kod błędu
        return { error: "Wystąpił błąd podczas dodawania izolacji." };
      }
    },

    async update(ctx) {
      const isolationData = ctx.request.body.data;
      const isolationId = ctx.params.id;
      try{
        const newIsolation = await strapi.entityService.update('api::isolation.isolation',isolationId, {data: isolationData});
        const animal = isolationData.animal;
        if (
          isolationData.status === "Zakończona" ||
          isolationData.status === "Anulowana"
        ) {
          // Zaktualizuj status isIsolated zwierzęcia na false
          await strapi.entityService.update("api::animal.animal", animal, {
            data: { isIsolated: false },
          });
        } else {
          await strapi.entityService.update("api::animal.animal", animal, {
            data: { isIsolated: true },
          });
        }
        return newIsolation;

      }catch{
        ctx.response.status = 500; // lub inny kod błędu
        return { error: "Wystąpił błąd podczas dodawania izolacji." };
      }
    },
  })
);
