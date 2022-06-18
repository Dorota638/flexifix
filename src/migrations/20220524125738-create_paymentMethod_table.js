'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('PaymentMethods', {
      id: {
        type: Sequelize.SMALLINT(),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      method: { type: Sequelize.STRING(15), allowNull: false },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('PaymentMethods');
  },
};
