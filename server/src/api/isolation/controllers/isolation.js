'use strict';

/**
 * isolation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::isolation.isolation');
