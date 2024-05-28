'use strict';

/**
 * data-config service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-config.data-config');
