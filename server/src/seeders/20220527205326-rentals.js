'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Rentals', [
      {
        id: '7fe34a64-db1d-44fb-9d35-b9acb344b64b',
        number: 'RL001',
        fkSalesPersonId: 1,
        fkBicycleId: 1,
        fkCustomerId: 1,
        fkAccount:1,
        fkPaymentMethod:1,
        periodStart: new Date(),
        periodEnd: new Date(),
        fkAccount: 1,
        fkPaymentMethod: 1,
        deposit: 500,
        wireLock: true,
        depositId: false,
        returned: null,
        workHours: 0.5,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '69fac033-0a66-40e7-8bee-79d0f628864f',
        number: 'RL002',
        fkSalesPersonId: 1,
        fkBicycleId: 2,
        fkCustomerId: 2,
        fkAccount:1,
        fkPaymentMethod:1,
        periodStart: new Date(),
        periodEnd: new Date(),
        deposit: 500,
        wireLock: true,
        depositId: false,
        returned: null,
        workHours: 0.5,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Rentals', null, {});
  },
};
