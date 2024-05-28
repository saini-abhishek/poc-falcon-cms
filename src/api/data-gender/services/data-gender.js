'use strict';

/**
 * data-gender service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-gender.data-gender');
