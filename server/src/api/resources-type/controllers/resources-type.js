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
          const existingResourceType = await strapi.entityService.findOne(
            "api::resources-type.resources-type",
            resourceTypeData.categoryId,
            {
              populate: ["resource_subtypes"],
            }
          );

          const updatedResourceSubtypes =
            existingResourceType.resource_subtypes.map((subtype) => subtype.id);
          updatedResourceSubtypes.push(newResourceSubtype.id);

          const newResourceType = await strapi.entityService.update(
            "api::resources-type.resources-type",
            existingResourceType.id,
            {
              data: {
                resource_subtypes: updatedResourceSubtypes,
                publishedAt: date,
              },
            }
          );

          return newResourceType;
        }
      } catch (error) {
        ctx.response.status = 500;
        return { error: "Wystąpił błąd podczas dodawania izolacji." };
      }
    },
    async delete(ctx) {
      const resourceTypeId = ctx.request.params;
      const date = new Date();
      try {
        const resourceType = strapi.entityService.findOne(
          "api::resources-type.resources-type",
          resourceTypeId.id,
          { populate: ["resource_subtypes"] }
        );
        (await resourceType).resource_subtypes.map(async (subtype) => {
          await strapi.entityService.delete(
            "api::resource-subtype.resource-subtype",
            subtype.id
          );
        });
        await strapi.entityService.delete(
          "api::resources-type.resources-type",
          resourceTypeId.id
        );
        const resourcesWithOutResourceType =
          await strapi.entityService.findMany("api::resource.resource", {
            filters: { resources_type: null },
          });
        resourcesWithOutResourceType.map(async (resource) => {
          await strapi.entityService.update(
            "api::resource.resource",
            resource.id,
            {
              data: {
                resources_type: 8,
              },
            }
          );
        });
        return true;
      } catch (error) {
        ctx.response.status = 500;
        return { error: "Wystąpił błąd podczas usuwania typu zasobu." };
      }
    },
  })
);
