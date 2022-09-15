'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('EmployeePasswords', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      password: { type: Sequelize.STRING(61) },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('Employees');
  },
};
