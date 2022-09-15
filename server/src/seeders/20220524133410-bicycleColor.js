'use strict';

const { v4: UUIDV4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('BicycleColors', [
      {
        id: UUIDV4(),
        value: 'White',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Black',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Blue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Green',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Purple',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Pink',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Gray',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Silver',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Brown',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Yellow',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Orange',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Creme',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BicycleColors', null, {});
  },
};
