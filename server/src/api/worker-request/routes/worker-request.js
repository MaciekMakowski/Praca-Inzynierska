'use strict';

/**
 * worker-request router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::worker-request.worker-request');
