'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductGroups', [
      {
        id: 1,
        value: 'Part',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        value: 'Ware',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ProductGroups', null, {});
  },
};
