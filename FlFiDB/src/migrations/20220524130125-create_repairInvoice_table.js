'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('RepairInvoice', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      number: { type: Sequelize.STRING(10), allowNull: false },
      fkPaymentMethod: { type: Sequelize.SMALLINT(), allowNull: false },
      fkAccount: { type: Sequelize.SMALLINT(), allowNull: false },
      priceTotal: { type: Sequelize.DOUBLE(), allowNull: false },
      priceVAT: { type: Sequelize.DOUBLE(), allowNull: false },
      priceNetto: { type: Sequelize.DOUBLE(), allowNull: false },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('RepairInvoice');
  },
};
