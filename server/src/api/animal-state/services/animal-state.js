'use strict';

/**
 * animal-state service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::animal-state.animal-state');
