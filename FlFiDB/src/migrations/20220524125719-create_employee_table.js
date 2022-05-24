'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('Employees', {
      id: {
        type: Sequelize.SMALLINT(),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      name: { type: Sequelize.STRING(25), allowNull: false },
      role: { type: Sequelize.SMALLINT() },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('Employees');
  },
};
