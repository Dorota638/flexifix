'use strict';

const { v4: UUIDV4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('RepairStatus', [
      {
        id: UUIDV4(),
        value: 'Waiting for repair',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Waiting for parts',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Repair in progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Done - waiting for pickup',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { id: UUIDV4(), value: 'Done', createdAt: new Date(), updatedAt: new Date() },
      {
        id: UUIDV4(),
        value: 'Canceled',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('RepairStatus', null, {});
  },
};
