'use strict';

/**
 * isolation router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::isolation.isolation');
