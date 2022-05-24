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
      bicycleId: { type: Sequelize.STRING(36), allowNull: false },
      customerId: { type: Sequelize.STRING(36), allowNull: false },
      status: { type: Sequelize.SMALLINT(), allowNull: false },
      takenBy: { type: Sequelize.SMALLINT(), allowNull: false },
      technicianId: { type: Sequelize.SMALLINT(), allowNull: true },
      dateStarted: { type: Sequelize.DATE(), allowNull: true },
      dateFinished: { type: Sequelize.DATE(), allowNull: true },
      dateReturned: { type: Sequelize.DATE(), allowNull: true },
      spareBicycleId: { type: Sequelize.STRING(36), allowNull: true },
      comment: { type: Sequelize.STRING(50), allowNull: true },
      priceEstimated: { type: Sequelize.STRING(), allowNull: false },
      timeEstimated: { type: Sequelize.STRING(), allowNull: false },
      timeFinal: { type: Sequelize.STRING(), allowNull: false },
      priceTotal: { type: Sequelize.DOUBLE(), allowNull: false },
      priceVAT: { type: Sequelize.DOUBLE(), allowNull: false },
      priceNetto: { type: Sequelize.DOUBLE(), allowNull: false },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('Repairs');
  },
};