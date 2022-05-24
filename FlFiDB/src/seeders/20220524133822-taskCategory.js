'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('TaskCategories', [
      {
        id: 1,
        name: 'Bottom Bracket',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Front Wheel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Rear Wheel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Drivetrain',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Front Brake',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Rear Brake',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: 'Accessory',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: 'Fork and steering',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: 'Front Derailleur',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: 'Internal Gears',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        name: 'External Gears',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        name: 'Maintenance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { id: 13,
        name: 'Headset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        name: 'Cargo bike',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        name: 'E-Scooter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('TaskCategories', null, {});
  },
};
