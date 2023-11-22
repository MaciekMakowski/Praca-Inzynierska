"use strict";

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
}));
