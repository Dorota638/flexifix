'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductGroups', [
      {
        id: '133c4bf5-58d7-47cc-bc92-c289fda669e5',
        value: 'Part',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '735c5aab-5b6b-448b-90e6-622db93770de',
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
