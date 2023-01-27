'use strict';

const { v4: UUIDV4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks', [
      {
        id: UUIDV4(),
        name: 'Flat Tire',
        fkTaskCategory: '04d677a7-fe92-4705-84ae-2ed9b2fb2b02',
        duration: 1,
        fkProductCategoryId: "859b6693-0d2b-4f48-a355-61d94181faa7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Maint',
        fkTaskCategory: '338f7789-98c0-4b8e-aaae-df5e50535ac1',
        duration: 2,
        fkProductCategoryId: "859b6693-0d2b-4f48-a355-61d94181faa7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Gear Wire and Cable',
        fkTaskCategory: "47deb9c1-5b11-4bf4-ba59-429c6c6bf765",
        duration: 3,
        fkProductCategoryId: "859b6693-0d2b-4f48-a355-61d94181faa7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Spoke Replacement',
        fkTaskCategory: "49dd7e05-a61c-4e62-b21c-f73f6f9ed11d",
        duration: 4,
        fkProductCategoryId: "1841c55d-fd09-48a8-b33f-e910e25b236e",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: UUIDV4(),
        name: 'Chain Replacelement',
        fkTaskCategory: "5d620453-0605-406e-ace1-0fea8e2d8a83",
        duration: 0.5,
        fkProductCategoryId: "1841c55d-fd09-48a8-b33f-e910e25b236e",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tasks', null, {});
  },
};
