'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('BicycleStatus', [
      {
        id: 1,
        status: 'Nothing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        status: 'Scrap',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        status: 'Being Repaired',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        status: 'Spare - Available',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        status: 'Spare - Borrowed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        status: 'For Sale',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        status: 'For Rent',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        status: 'Rented Out',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        status: 'At Customer Use',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BicycleStatus', null, {});
  },
};
