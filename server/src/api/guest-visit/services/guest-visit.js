'use strict';

/**
 * guest-visit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guest-visit.guest-visit');
