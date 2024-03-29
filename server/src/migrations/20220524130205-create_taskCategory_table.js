'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('TaskCategories', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      name: { type: Sequelize.STRING(20), allowNull: false },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('TaskCategories');
  },
};
