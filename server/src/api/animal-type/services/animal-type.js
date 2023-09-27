'use strict';

/**
 * animal-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::animal-type.animal-type');
