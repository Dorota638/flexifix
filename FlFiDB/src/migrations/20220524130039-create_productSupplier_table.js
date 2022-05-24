'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('ProcuctSupliers', {
      id: {
        type: Sequelize.SMALLINT(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: Sequelize.STRING(20), allowNull: false },
      minOrder: { type: Sequelize.SMALLINT(), allowNull: true },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('ProcuctSupliers');
  },
};
