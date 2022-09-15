'use strict';

const { v4: UUIDV4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('TaskCategories', [
      {
        id: UUIDV4(),
        name: 'Bottom Bracket',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Front Wheel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Rear Wheel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Drivetrain',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Front Brake',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Rear Brake',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Accessory',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Fork and steering',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Front Derailleur',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Internal Gears',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'External Gears',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Maintenance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { id: UUIDV4(),
        name: 'Headset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: UUIDV4(),
        name: 'Cargo bike',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
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
