'use strict';

/**
 * worker-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::worker-request.worker-request');
