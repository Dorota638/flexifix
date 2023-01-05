'use strict';

const { v4: UUIDV4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductCategories', [
      {
        id: "1841c55d-fd09-48a8-b33f-e910e25b236e",
        value: 'Tire',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "859b6693-0d2b-4f48-a355-61d94181faa7",
        value: 'Chain',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Sprocket',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Bottom Bracket',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Cassette',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ProductCategories', null, {});
  },
};
