'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('BicycleTires', [
      {
        id: 1,
        size: '23-622',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        size: '25-622',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        size: '28-622',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        size: '32-622',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        size: '37-622',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        size: '40-622',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        size: '47-622',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        size: '47-406',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        size: '47-559',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        size: '49-508',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        size: '54-584',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BicycleTires', null, {});
  },
};
