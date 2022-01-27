'use strict';
const dataProduct = require('../data/product grocery.json')
module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   dataProduct.forEach(el => {
     delete el.id
     el.createdAt = new Date()
     el.updatedAt = new Date()
   })
     return queryInterface.bulkInsert('Products', dataProduct, {})
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Products', null, {})
  }
};
