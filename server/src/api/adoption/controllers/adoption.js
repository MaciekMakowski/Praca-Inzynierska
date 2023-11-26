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
    async createByGuest(ctx) {
      const adoptionData = ctx.request.body.data;
      try {
        const guest = await strapi.entityService.create(
          "api::guest.guest",
          {data:{personData:{
            name: adoptionData.guest.attributes.name,
            lastName: adoptionData.guest.attributes.lastName,
            pesel: adoptionData.guest.attributes.pesel,
            birthDate: adoptionData.guest.attributes.birthDate,
            email: adoptionData.guest.attributes.email,
            sex: adoptionData.guest.attributes.sex,
            phoneNumber: adoptionData.guest.attributes.phoneNumber,
            address:{
              address: adoptionData.guest.attributes.address,
              city: adoptionData.guest.attributes.city,
              postCode: adoptionData.guest.attributes.postCode,
            }

          }}},
        );
        await strapi.entityService.update(
          "api::guest.guest",
          guest.id,
          { data: { publishedAt: adoptionData.date } }
        );

        const adoption = await strapi.entityService.create(
          "api::adoption.adoption",
          { data: {
            animal: adoptionData.animal,
            guest: guest.id,
            date: adoptionData.date,
            status: adoptionData.status,
          }, populate: ["animal", "guest"] }
        );
        const populateAdoption = await strapi.entityService.update(
          "api::adoption.adoption",
          adoption.id,
          { data: { publishedAt: adoptionData.date }, populate: ["animal", "guest"] }
        );
        // Pobierz identyfikator zwierzęcia z relacji
        const animal = adoptionData.animal;
        // Zmień status zwierzęcia na izolowane
        await strapi.entityService.update("api::animal.animal", animal, {
          data: { toAdoption: false },
        });

        // Zwróć nową izolację
        return populateAdoption;
      } catch (error) {
        // Obsłuż błędy, jeśli istnieją
        ctx.response.status = 500; // lub inny kod błędu
        return { error: "Wystąpił błąd podczas dodawania adopcji." };
      }
    }
  })
);
