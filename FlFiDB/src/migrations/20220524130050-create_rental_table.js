'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('Rentals', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      number: { type: Sequelize.STRING(10), allowNull: false },
      fkAccount: { type: Sequelize.SMALLINT(), allowNull: false },
      fkPaymentMethod: { type: Sequelize.SMALLINT(), allowNull: false },
      fkSalesPersonId: { type: Sequelize.SMALLINT(), allowNull: false },
      fkCustomerId: { type: Sequelize.STRING(36), allowNull: false },
      periodStart: { type: Sequelize.DATE(), allowNull: false },
      periodEnd: { type: Sequelize.DATE(), allowNull: false },
      deposit: { type: Sequelize.SMALLINT(), allowNull: false },
      wireLock: { type: Sequelize.BOOLEAN(), allowNull: false },
      depositId: { type: Sequelize.BOOLEAN(), allowNull: true },
      returned: { type: Sequelize.DATE(), allowNull: true },
      workHours: { type: Sequelize.DOUBLE(), allowNull: true },
      active: { type: Sequelize.BOOLEAN(), allowNull: false },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('Rentals');
  },
};
