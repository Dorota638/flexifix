'use strict';

const { v4: UUIDV4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductBrands', [
      {
        id: UUIDV4(),
        value: 'Adidas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Nike',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Puma',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'New Balance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Bilka',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ProductBrands', null, {});
  },
};
