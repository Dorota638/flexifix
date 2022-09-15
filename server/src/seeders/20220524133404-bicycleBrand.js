'use strict';
const { v4: UUIDV4 } = require('uuid');
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('BicycleBrands', [
      {
        id: UUIDV4(),
        value: 'Centurion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Rocky',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Giant',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Kildemoes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Titan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BicycleBrands', null, {});
  },
};
