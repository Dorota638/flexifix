'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('RepairStatus', [
      {
        id: 1,
        status: 'Waiting for repair',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        status: 'Waiting for parts',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        status: 'Repair in progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        status: 'Done - waiting for pickup',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { id: 5, status: 'Done', createdAt: new Date(), updatedAt: new Date() },
      {
        id: 6,
        status: 'Canceled',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('RepairStatus', null, {});
  },
};
