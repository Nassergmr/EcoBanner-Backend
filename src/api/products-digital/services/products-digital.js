'use strict';

/**
 * products-digital service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::products-digital.products-digital');
