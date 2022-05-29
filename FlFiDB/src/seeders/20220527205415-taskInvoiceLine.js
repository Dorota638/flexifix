'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('TaskInvoiceLines', [
      {
        id: 'af0b7968-2400-4f77-a4f1-4a551c5d89df',
        fkTask: 1,
        fkRepairId: '2a242329-5307-4f71-ba5d-842013d86ffb',
        amount: 1,
        time: 1.5,
        price: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '92b46be5-fd4e-4b5c-9bae-41ff7e2bc429',
        fkTask: 2,
        fkRepairId: '2a242329-5307-4f71-ba5d-842013d86ffb',
        amount: 2,
        time: 1.5,
        price: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'f8c65f3d-3816-4de2-afbc-8088b47983bd',
        fkTask: 3,
        fkRepairId: '2a242329-5307-4f71-ba5d-842013d86ffb',
        amount: 3,
        time: 1.5,
        price: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'bad4b070-d3e2-4d0a-b92f-6991d7544d19',
        fkTask: 4,
        fkRepairId: '0cd38c79-f51c-47f6-81aa-fef83bb5f037',
        amount: 4,
        time: 1.5,
        price: 41,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0a5a7a19-02a6-451a-bb56-a78aa963aaae',
        fkTask: 5,
        fkRepairId: '0cd38c79-f51c-47f6-81aa-fef83bb5f037',
        amount: 5,
        time: 1.5,
        price: 51,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('TaskInvoiceLines', null, {});
  },
};
