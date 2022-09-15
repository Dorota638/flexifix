'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('Bicycles', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      type: { type: Sequelize.STRING(20), allowNull: true },
      name: { type: Sequelize.STRING(20), allowNull: true },
      color: { type: Sequelize.STRING(36), allowNull: false },
      brand: { type: Sequelize.STRING(36), allowNull: false },
      gearsystem: { type: Sequelize.STRING(36), allowNull: false },
      status: { type: Sequelize.STRING(36), allowNull: false },
      tires: { type: Sequelize.STRING(36), allowNull: false },
      frameNumber: { type: Sequelize.STRING(20), allowNull: true },
      fkOwnerId: { type: Sequelize.STRING(36), allowNull: false },
      fkHolderId: { type: Sequelize.STRING(36), allowNull: false },
      fleetNr: { type: Sequelize.STRING(20), allowNull: true },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('Bicycles');
  },
};
