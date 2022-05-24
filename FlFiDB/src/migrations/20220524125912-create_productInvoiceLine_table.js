'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('ProductInvoiceLines', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      fkSaleInvoiceId: { type: Sequelize.STRING(36), allowNull: true },
      fkRepairInvoiceId: { type: Sequelize.STRING(36), allowNull: true },
      fkProductId: { type: Sequelize.STRING(36), allowNull: false },
      amount: { type: Sequelize.SMALLINT(), allowNull: false },
      price: { type: Sequelize.DOUBLE(), allowNull: false },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('ProductInvoiceLines');
  },
};
