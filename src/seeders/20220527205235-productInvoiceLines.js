'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductInvoiceLines', [
      {
        id: '362b0aa9-e0a0-48fd-8b4b-56c4ca6128d9',
        fkSaleId: 'bbd8144f-f35e-40d5-9d02-14df93704e79',
        fkRepairId: null,
        fkProductId: 1,
        amount: 2,
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b0237a29-073f-4d70-b9ba-e57a93bc0983',
        fkSaleId: '612aeef3-b09d-4975-a6f2-e8dde6eb3755',
        fkRepairId: null,
        fkProductId: 2,
        amount: 1,
        price: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c12261b6-a916-416d-ac1c-ab0243a863c5',
        fkSaleId: null,
        fkRepairId: '2a242329-5307-4f71-ba5d-842013d86ffb',
        fkProductId: 3,
        amount: 1,
        price: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3045803a-05d1-4550-948e-33c6038026f2',
        fkSaleId: null,
        fkRepairId: '0cd38c79-f51c-47f6-81aa-fef83bb5f037',
        fkProductId: 1,
        amount: 2,
        price: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ProductInvoiceLines', null, {});
  },
};
