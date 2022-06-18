'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Sales', [
      {
        id: 'bbd8144f-f35e-40d5-9d02-14df93704e79',
        fkCustomerId: null,
        fkSalesPersonId: 1,
        number: 'SE001',
        fkPaymentMethod: 1,
        fkAccount: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '612aeef3-b09d-4975-a6f2-e8dde6eb3755',
        fkCustomerId: '87d00838-5b2b-4940-8644-2af9170eb040',
        number: 'SE002',
        fkPaymentMethod: 1,
        fkAccount: 1,
        fkSalesPersonId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Sales', null, {});
  },
};
