'use strict';

const { v4: UUIDV4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('TaskCategories', [
      {
        id: "04d677a7-fe92-4705-84ae-2ed9b2fb2b02",
        name: 'Bottom Bracket',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '338f7789-98c0-4b8e-aaae-df5e50535ac1',
        name: 'Front Wheel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "47deb9c1-5b11-4bf4-ba59-429c6c6bf765",
        name: 'Rear Wheel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "49dd7e05-a61c-4e62-b21c-f73f6f9ed11d",
        name: 'Drivetrain',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "5d620453-0605-406e-ace1-0fea8e2d8a83",
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
