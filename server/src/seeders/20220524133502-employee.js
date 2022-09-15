'use strict';
const { v4: UUIDV4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Employees', [
      {
        id: UUIDV4(),
        name: 'Jiri Krupa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Matus Laco',
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Adam Dano',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Luka Nikic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Employees', null, {});

  },
};
