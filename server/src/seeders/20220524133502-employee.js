'use strict';
const { v4: UUIDV4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Employees', [
      {
        id: 'b4123eb3-7d70-464d-abee-691cfef46771',
        name: 'Jiri Krupa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '30976797-115a-4ebb-9864-25412323ccf4',
        name: 'Matus Laco',
        updatedAt: new Date(),
      },
      {
        id: '3a782507-2a62-4bb6-a343-62c485386259',
        name: 'Adam Dano',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Employees', null, {});

  },
};
