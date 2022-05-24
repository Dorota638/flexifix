'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductGroups', [
      { id: 1, name: 'Part', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Ware', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ProductGroups', null, {});
  },
};
