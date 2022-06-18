'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Repairs', [
      {
        id: '2a242329-5307-4f71-ba5d-842013d86ffb',
        number: 'RR001',
        fkBicycleId: '368f9fa9-b0ce-4f03-88bb-a4f4d9b13c85',
        fkCustomerId: 'c6389cef-b019-4b77-b0f7-44f68aebf155',
        status: 1,
        fkTakenBy: 1,
        fkTechnicianId: 1,
        fkAccount: 1,
        fkPaymentMethod: 1,
        dateStarted: new Date(),
        dateFinished: new Date(),
        fkSpareBicycleId: null,
        comment: 'nic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0cd38c79-f51c-47f6-81aa-fef83bb5f037',
        fkBicycleId: '368f9fa9-b0ce-4f03-88bb-a4f4d9b13c85',
        fkCustomerId: 'c6389cef-b019-4b77-b0f7-44f68aebf155',
        number: 'RR002',
        fkAccount: 1,
        fkPaymentMethod: 1,
        status: 1,
        fkTakenBy: 1,
        fkTechnicianId: 1,
        dateStarted: new Date(),
        dateFinished: new Date(),
        fkSpareBicycleId: null,
        comment: 'nic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Repairs', null, {});
  },
};
