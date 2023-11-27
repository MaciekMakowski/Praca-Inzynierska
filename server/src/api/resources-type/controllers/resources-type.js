"use strict";

/**
 * resources-type controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::resources-type.resources-type",
  ({ strapi }) => ({
    async create(ctx) {
      const resourceTypeData = ctx.request.body.data;
      const date = new Date();

      try {
        if (resourceTypeData.categoryId === -1) {
          const newResourceType = await strapi.entityService.create(
            "api::resources-type.resources-type",
            {
              data: {
                name: resourceTypeData.name,
                subtype: null,
                publishedAt: date,
              },
            }
          );
          return newResourceType;
        } else {
          const newResourceSubtype = await strapi.entityService.create(
            "api::resource-subtype.resource-subtype",
            {
              data: {
                name: resourceTypeData.name,
                publishedAt: date,
              },
            }
          );
          const newResourceType = await strapi.entityService.update(
            "api::resources-type.resources-type",
            resourceTypeData.categoryId,
            {
              data: {
                resource_subtypes: [newResourceSubtype.id],
                publishedAt: date,
              },
            }
          );
          return newResourceType;
        }

        // Zwróć nową izolację
      } catch (error) {
        // Obsłuż błędy, jeśli istnieją
        ctx.response.status = 500; // lub inny kod błędu
        return { error: "Wystąpił błąd podczas dodawania izolacji." };
      }
    },
  })
);
