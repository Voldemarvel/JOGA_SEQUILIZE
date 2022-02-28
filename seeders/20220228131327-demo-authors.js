'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Authors', [{
        name: 'Ashley Galvin',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Authors', [{
        name: 'Patrick Beach',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Authors', [{
        name: 'MacKenzie Miller',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};