'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('BicycleGearsystem', [
      {
        id: 1,
        type: 'Single speed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        type: 'Nexus 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        type: 'Nexus 4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        type: 'Nexus 7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        type: 'Nexus 8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        type: 'T3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        type: 'P5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        type: 'S7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        type: '3x5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        type: '3x6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        type: '3x7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        type: '3x8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        type: '3x9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        type: '3x10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        type: '1x11',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BicycleGearsystem', null, {});
  },
};
