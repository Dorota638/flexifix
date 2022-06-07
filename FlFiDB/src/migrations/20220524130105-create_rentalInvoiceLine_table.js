'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('RentalInvoiceLines', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      fkRentalId: { type: Sequelize.STRING(36), allowNull: false },
      fkBicycleId: { type: Sequelize.STRING(36), allowNull: false },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('RentalInvoiceLines');
  },
};
