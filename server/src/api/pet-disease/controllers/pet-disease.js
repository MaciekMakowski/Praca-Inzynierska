"use strict";

/**
 * pet-disease controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::pet-disease.pet-disease",
  ({ strapi }) => ({
    async create(ctx) {
      const petDiseaseData = ctx.request.body.data;
      const date = new Date();

      try {
        const petDisease = await strapi.entityService.create(
          "api::pet-disease.pet-disease",
          { data: petDiseaseData, populate: ["animal", "disease"] }
        );
        const populatePetDisease = await strapi.entityService.update(
          "api::pet-disease.pet-disease",
          petDisease.id,
          { data: { publishedAt: date } }
        );
        const animal = petDisease.animal.id;
        await strapi.entityService.update("api::animal.animal", animal, {
          data: { isIll: true },
        });

        return populatePetDisease;
      } catch (error) {
        ctx.response.status = 500;
        return { error: "Wystąpił błąd podczas dodawania choroby zwierzęcia." };
      }
    },
    async update(ctx) {
      const petDiseaseData = ctx.request.body.data;
      const petDiseaseId = ctx.params.id;
      try {
        const newPetDisease = await strapi.entityService.update(
          "api::pet-disease.pet-disease",
          petDiseaseId,
          { data: petDiseaseData }
        );
        const animal = petDiseaseData.animal;
        if (
          petDiseaseData.status === "Zakończona" ||
          petDiseaseData.status === "Anulowana"
        ) {
          await strapi.entityService.update("api::animal.animal", animal, {
            data: { isIll: false },
          });
        } else {
          await strapi.entityService.update("api::animal.animal", animal, {
            data: { isIll: true },
          });
        }
        return newPetDisease;
      } catch (error) {
        ctx.response.status = 500;
        return { error: "Wystąpił błąd podczas dodawania izolacji." };
      }
    },
  })
);
