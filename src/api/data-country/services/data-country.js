'use strict';

/**
 * data-country service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-country.data-country');
