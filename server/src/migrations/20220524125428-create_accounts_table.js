'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('Accounts', {
      id: {
        type: Sequelize.SMALLINT(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: Sequelize.STRING(10), allowNull: false },
      total: { type: Sequelize.INTEGER(), allowNull: false },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('Accounts');
  },
};
