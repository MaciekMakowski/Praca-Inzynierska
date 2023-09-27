'use strict';

/**
 * adoption service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::adoption.adoption');
