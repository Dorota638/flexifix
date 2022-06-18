'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('Customers', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      firstName: { type: Sequelize.STRING(20), allowNull: false },
      lastName: { type: Sequelize.STRING(20), allowNull: false },
      company: { type: Sequelize.STRING(20), allowNull: true },
      cvr: { type: Sequelize.STRING(20), allowNull: true },
      phone: { type: Sequelize.STRING(15), allowNull: true },
      address: { type: Sequelize.STRING(36), allowNull: true },
      zipCode: { type: Sequelize.STRING(10), allowNull: true },
      city: { type: Sequelize.STRING(20), allowNull: true },
      email: { type: Sequelize.STRING(36), allowNull: true },
      idInfo: { type: Sequelize.STRING(36), allowNull: true },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('Customers');
  },
};
