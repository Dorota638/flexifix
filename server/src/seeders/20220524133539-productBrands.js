'use strict';

const { v4: UUIDV4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductBrands', [
      {
        id: "3639b200-8ca3-4a8d-b240-0d2ac9a3f60a",
        value: 'Adidas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "4ef0b68f-5e11-4419-9e14-3bdcfb30e0a9",
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
