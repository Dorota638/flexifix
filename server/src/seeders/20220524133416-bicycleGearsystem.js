'use strict';

const { v4: UUIDV4 } = require('uuid');


module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('BicycleGearsystem', [
      {
        id: UUIDV4(),
        value: 'Single speed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Nexus 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Nexus 4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Nexus 7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'Nexus 8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'T3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'P5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: 'S7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: '3x5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: '3x6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: '3x7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: '3x8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: '3x9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: '3x10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        value: '1x11',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BicycleGearsystem', null, {});
  },
};
