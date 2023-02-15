'use strict';

const { v4: UUIDV4 } = require('uuid');


module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('BicycleStatus', [
      {
        id: UUIDV4(),
        value: 'Nothing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Scrap',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Being Repaired',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Spare - Available',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Spare - Borrowed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'For Sale',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b5af50f7-aaaa-47c1-b0c4-04eea873e9b4',
        value: 'For Rent',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c90f571b-0cb2-4d93-99ed-8ae748ef834e',
        value: 'Rented Out',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'At Customer Use',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BicycleStatus', null, {});
  },
};
