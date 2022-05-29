'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('BicycleColors', [
      {
        id: 1,
        color: 'White',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        color: 'Black',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        color: 'Blue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        color: 'Red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        color: 'Green',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        color: 'Purple',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        color: 'Pink',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        color: 'Gray',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        color: 'Silver',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        color: 'Brown',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        color: 'Yellow',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        color: 'Orange',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        color: 'Creme',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BicycleColors', null, {});
  },
};
