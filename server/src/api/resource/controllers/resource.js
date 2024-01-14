"use strict";

const dayjs = require("dayjs");
/**
 * resource controller
 */

const ResourceStatus = {
  AVALIABLE: "Dostępne",
  UNAVALIABLE: "Zużyte",
  EXPIRED: "Przeterminowane",
  INUSE: "W użyciu",
};

const countSubtypes = (resource, foodSubtypes) => {
  if (!resource.resource_subtype) return;
  if (!resource.resource_subtype.name) return;

  const subtype = foodSubtypes.find(
    (subtype) => subtype[0] === resource.resource_subtype.name
  );
  if (subtype) subtype[1]++;
  else foodSubtypes.push([resource.resource_subtype.name, 1]);
};

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::resource.resource",
  ({ strapi }) => ({
    async getStats() {
      const resources = await strapi.entityService.findMany(
        "api::resource.resource",
        { populate: ["resources_type", "resource_subtype"] }
      );
      const food = resources.filter(
        (resource) => resource.resources_type.name === "Jedzenie"
      );
      const foodSubtypes = [];
      const foodStatuses = [];
      const avaliableFood = [];
      const inUseFoodTypes = [];
      food.forEach((resource) => {
        if (
          resource.status !== ResourceStatus.UNAVALIABLE &&
          resource.status !== ResourceStatus.EXPIRED
        )
          countSubtypes(resource, foodSubtypes);
        if (resource.status === ResourceStatus.AVALIABLE)
          countSubtypes(resource, avaliableFood);
        if (resource.status === ResourceStatus.INUSE)
          countSubtypes(resource, inUseFoodTypes);
        if (resource.status && resource.status !== ResourceStatus.UNAVALIABLE) {
          const status = foodStatuses.find(
            (status) => status[0] === resource.status
          );
          if (status) status[1]++;
          else foodStatuses.push([resource.status, 1]);
        }
      });

      const closeToExpired = [];
      resources.forEach((resource) => {
        if (
          resource.status === ResourceStatus.AVALIABLE &&
          resource.expirationDate
        ) {
          const daysToExpire = dayjs(resource.expirationDate).diff(
            dayjs(),
            "day"
          );
          if (daysToExpire < 7) {
            const expiringItem = closeToExpired.find(
              (type) => type[0] === resource.resource_subtype.name
            );
            if (expiringItem) closeToExpired[1]++;
            else
              closeToExpired.push([
                resource.resource_subtype.name
                  ? resource.resource_subtype.name
                  : resource.resources_type.name,
                1,
              ]);
          }
        }
      });
      const resourceTypes = [];
      resources.forEach((resource) => {
        if (
          resource.status !== ResourceStatus.EXPIRED &&
          resource.status !== ResourceStatus.UNAVALIABLE
        ) {
          const type = resourceTypes.find(
            (type) => type[0] === resource.resources_type.name
          );
          if (type) type[1]++;
          else resourceTypes.push([resource.resources_type.name, 1]);
        }
      });

      const resourcesStats = [];
      resources.forEach((resource) => {
        if (!resource.resource_subtype || !resource.resources_type) return;
        if (
          resource.status === ResourceStatus.EXPIRED ||
          resource.status === ResourceStatus.UNAVALIABLE
        )
          return;
        const type = resourcesStats.find(
          (type) => type[0] === resource.resources_type.name
        );
        if (!type)
          resourcesStats.push([
            resource.resources_type.name,
            [[resource.resource_subtype.name, 1]],
          ]);
        else {
          const subtype = type[1].find(
            (subtype) => subtype[0] === resource.resource_subtype.name
          );
          if (!subtype) type[1].push([resource.resource_subtype.name, 1]);
          else subtype[1]++;
        }
      });
      return {
        foodSubtypes,
        avaliableFood,
        inUseFoodTypes,
        closeToExpired,
        resourceTypes,
        foodStatuses,
        resourcesStats,
      };
    },
  })
);
