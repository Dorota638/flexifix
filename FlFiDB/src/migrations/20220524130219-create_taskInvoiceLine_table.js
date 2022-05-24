'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('TaskInvoiceLines', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      fkTask: { type: Sequelize.SMALLINT(), allowNull: false },
      fkRepairInvoiceId: { type: Sequelize.STRING(36), allowNull: false },
      amount: { type: Sequelize.SMALLINT(), allowNull: false },
      time: { type: Sequelize.STRING(5), allowNull: false },
      price: { type: Sequelize.DOUBLE(), allowNull: false },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('TaskInvoiceLines');
  },
};
