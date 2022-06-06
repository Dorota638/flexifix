'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('Tasks', {
      id: {
        type: Sequelize.SMALLINT(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: Sequelize.STRING(25), allowNull: false },
      fkTaskCategory: { type: Sequelize.SMALLINT, allowNull: false },
      duration: { type: Sequelize.SMALLINT, allowNull: false },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('Tasks');
  },
};
