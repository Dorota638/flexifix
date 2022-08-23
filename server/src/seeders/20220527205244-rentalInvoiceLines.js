'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('RentalInvoiceLines', [
      {
        id: '35eae6c6-a618-4550-ab14-4a711ffd6489',
        fkRentalId: '7fe34a64-db1d-44fb-9d35-b9acb344b64b',
        fkBicycleId: '368f9fa9-b0ce-4f03-88bb-a4f4d9b13c85',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'fb95d2b5-5bc1-4f25-85ec-9f7141b349a3',
        fkRentalId: '69fac033-0a66-40e7-8bee-79d0f628864f',
        fkBicycleId: 'cf2cbc4f-2c0e-4af7-99d0-aca1288bb6c5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('RentalInvoiceLines', null, {});
  },
};
