'use strict';

/**
 * authors service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::authors.authors');
