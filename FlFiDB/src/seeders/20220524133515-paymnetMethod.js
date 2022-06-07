'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PaymentMethods', [
      { id: 1, method: 'Cash',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        id: 2,
        method: 'MobilePay',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { id: 3,
        method: 'Card',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        method: 'Bank Transfer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PaymentMethods', null, {});
  },
};
