'use strict';
const countries = require('../config/countries.js');

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    var inserts = [];
    countries.forEach(country => {
      inserts = [...inserts, { name: country }]
    });
    try {
      await queryInterface.bulkInsert('countries', inserts)
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('countries', null, {});
  }
};
