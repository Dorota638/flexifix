'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bicycles', [
      {
        id: '368f9fa9-b0ce-4f03-88bb-a4f4d9b13c85',
        type: 'izi',
        frameNumber:'123',
        name: 'on',
        color: 1,
        brand: 2,
        gearsystem: 3,
        status: 4,
        tires: 5,
        fkOwnerId: 'c6389cef-b019-4b77-b0f7-44f68aebf155',
        fkHolderId: 'c6389cef-b019-4b77-b0f7-44f68aebf155',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'cf2cbc4f-2c0e-4af7-99d0-aca1288bb6c5',
        type: 'busy',
        frameNumber:'321',
        name: 'ona',
        color: 1,
        brand: 2,
        gearsystem: 3,
        status: 4,
        tires: 5,
        fkOwnerId: 'c6389cef-b019-4b77-b0f7-44f68aebf155',
        fkHolderId: 'c6389cef-b019-4b77-b0f7-44f68aebf155',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'de20c98a-bba5-4787-8888-a463d8ba88a5',
        type: 'lizy',
        frameNumber:'231',
        name: 'ono',
        color: 1,
        brand: 2,
        gearsystem: 3,
        status: 4,
        tires: 5,
        fkOwnerId: '5a5175db-14e2-414f-9dbe-8c36879baabb',
        fkHolderId: '5a5175db-14e2-414f-9dbe-8c36879baabb',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Bicycles', null, {});

  },
};
