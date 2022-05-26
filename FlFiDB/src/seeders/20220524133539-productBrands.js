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

    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BicycleGearsystem', null, {});
  },
};
