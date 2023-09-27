'use strict';

/**
 * volunteer-meeting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::volunteer-meeting.volunteer-meeting');
