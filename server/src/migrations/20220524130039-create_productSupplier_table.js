'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('ProductSuppliers', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      value: { type: Sequelize.STRING(20), allowNull: false },
      minOrder: { type: Sequelize.SMALLINT(), allowNull: true },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('ProductSuppliers');
  },
};
