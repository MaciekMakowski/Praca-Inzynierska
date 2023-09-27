'use strict';

/**
 * pet-disease service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pet-disease.pet-disease');
