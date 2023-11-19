'use strict';

/**
 * pet-disease controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pet-disease.pet-disease', ({ strapi }) => ({
    async create(ctx) {
        // Pobierz dane o izolacji z zapytania
        const petDiseaseData = ctx.request.body.data;
        const date = new Date();
  
        try {
          // Dodaj nową izolację do bazy danych
          const petDisease = await strapi.entityService.create(
            "api::pet-disease.pet-disease",
            { data: petDiseaseData, populate: ["animal", "disease"] }
          );
          const populatePetDisease = await strapi.entityService.update(
            "api::pet-disease.pet-disease",
            petDisease.id,
            { data: { publishedAt: date } }
          );
          // Pobierz identyfikator zwierzęcia z relacji
          const animal = petDisease.animal.id;
          // Zmień status zwierzęcia na izolowane
          await strapi.entityService.update("api::animal.animal", animal, {
            data: { isIll: true },
          });
  
          // Zwróć nową izolację
          return populatePetDisease;
        } catch (error) {
          // Obsłuż błędy, jeśli istnieją
          ctx.response.status = 500; // lub inny kod błędu
          return { error: "Wystąpił błąd podczas dodawania choroby zwierzęcia." };
        }
      },
    async update(ctx) {
      const petDiseaseData = ctx.request.body.data;
      const petDiseaseId = ctx.params.id;
      try{
        const newPetDisease = await strapi.entityService.update('api::pet-disease.pet-disease',petDiseaseId, {data: petDiseaseData});
        const animal = petDiseaseData.animal;
        if (
          petDiseaseData.status === "Zakończona" ||
          petDiseaseData.status === "Anulowana"
        ) {
          // Zaktualizuj status isIsolated zwierzęcia na false
          await strapi.entityService.update("api::animal.animal", animal, {
            data: { isIll: false },
          });
        } else {
          await strapi.entityService.update("api::animal.animal", animal, {
            data: { isIll: true },
          });
        }
        return newPetDisease;

      }catch(error){
        ctx.response.status = 500; // lub inny kod błędu
        return { error: "Wystąpił błąd podczas dodawania izolacji." };
      }
    }
}));
