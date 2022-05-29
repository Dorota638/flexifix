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
      fkPaymentMethod: { type: Sequelize.SMALLINT(), allowNull: false },
      fkAccount: { type: Sequelize.SMALLINT(), allowNull: false },
      fkBicycleId: { type: Sequelize.STRING(36), allowNull: false },
      fkCustomerId: { type: Sequelize.STRING(36), allowNull: false },
      status: { type: Sequelize.SMALLINT(), allowNull: false },
      fkTakenBy: { type: Sequelize.SMALLINT(), allowNull: false },
      fkTechnicianId: { type: Sequelize.SMALLINT(), allowNull: true },
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
