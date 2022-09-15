'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('BicycleBrands', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      value: { type: Sequelize.STRING(30), allowNull: false },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('BicycleBrands');
  },
};
