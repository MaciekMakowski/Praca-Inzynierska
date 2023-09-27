'use strict';

/**
 * worker-request controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::worker-request.worker-request');
