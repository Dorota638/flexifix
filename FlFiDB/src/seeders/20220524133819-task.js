'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks', [
      {
        id: 1,
        name: 'Flat Tire',
        fkTaskCategory: 1,
        duration: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Maint',
        fkTaskCategory: 2,
        duration: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Gear Wire and Cable',
        fkTaskCategory: 3,
        duration: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Spoke Replacement',
        fkTaskCategory: 4,
        duration: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Chain Replacelement',
        fkTaskCategory: 5,
        duration: 0.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tasks', null, {});
  },
};
