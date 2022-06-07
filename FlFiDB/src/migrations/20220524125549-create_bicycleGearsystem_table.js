'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('BicycleGearsystem', {
      id: {
        type: Sequelize.SMALLINT(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      type: { type: Sequelize.STRING(20), allowNull: false },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('BicycleGearsystem');
  },
};
