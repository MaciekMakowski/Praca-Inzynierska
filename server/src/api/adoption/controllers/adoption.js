"use strict";

/**
 * adoption controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::adoption.adoption",
  ({ strapi }) => ({
    async create(ctx) {
      const adoptionData = ctx.request.body.data;
      const date = new Date();

      try {
        // Dodaj nową izolację do bazy danych
        const adoption = await strapi.entityService.create(
          "api::adoption.adoption",
          { data: adoptionData, populate: ["animal", "guest"] }
        );
        const populateAdoption = await strapi.entityService.update(
          "api::adoption.adoption",
          adoption.id,
          { data: { publishedAt: date } }
        );
        // Pobierz identyfikator zwierzęcia z relacji
        const animal = adoption.animal.id;
        // Zmień status zwierzęcia na izolowane
        await strapi.entityService.update("api::animal.animal", animal, {
          data: { toAdoption: false },
        });

        // Zwróć nową izolację
        return populateAdoption;
      } catch (error) {
        // Obsłuż błędy, jeśli istnieją
        ctx.response.status = 500; // lub inny kod błędu
        return { error: "Wystąpił błąd podczas dodawania izolacji." };
      }
    },
  })
);
