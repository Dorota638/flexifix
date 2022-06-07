'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Employees', [
      {
        id: 1,
        name: 'Jiri Krupa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Matus Laco',
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Adam Dano',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
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
