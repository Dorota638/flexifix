'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('Repairs', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      number: { type: Sequelize.STRING(10), allowNull: false },
      fkPaymentMethod: { type: Sequelize.SMALLINT(), allowNull: true },
      fkBicycleId: { type: Sequelize.STRING(36), allowNull: false },
      fkCustomerId: { type: Sequelize.STRING(36), allowNull: false },
      status: { type: Sequelize.STRING(36), allowNull: false },
      fkTakenBy: { type: Sequelize.STRING(36), allowNull: false },
      fkTechnicianId: { type: Sequelize.STRING(36), allowNull: true },
      dateStarted: { type: Sequelize.DATE(), allowNull: true },
      dateFinished: { type: Sequelize.DATE(), allowNull: true },
      dateReturned: { type: Sequelize.DATE(), allowNull: true },
      fkSpareBicycleId: { type: Sequelize.STRING(36), allowNull: true },
      comment: { type: Sequelize.STRING(50), allowNull: true },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('Repairs');
  },
};
