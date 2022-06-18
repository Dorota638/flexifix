'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('BicycleInvoiceLines', [
      {
        id: 'cc1b8407-0f2b-4baf-9cc6-0b78e94bbd2f',
        fkSaleId: 'bbd8144f-f35e-40d5-9d02-14df93704e79',
        fkBicycleId: 'de20c98a-bba5-4787-8888-a463d8ba88a5',
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5f3939db-e301-4b09-ab0d-26978a6699b4',
        fkSaleId: '612aeef3-b09d-4975-a6f2-e8dde6eb3755',
        fkBicycleId: 'de20c98a-bba5-4787-8888-a463d8ba88a5',
        price: 1200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BicycleInvoiceLines', null, {});
  },
};
