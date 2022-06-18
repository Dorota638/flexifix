'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('Products', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      fkSupplier: { type: Sequelize.SMALLINT() },
      fkBrand: { type: Sequelize.SMALLINT(), allowNull: false },
      fkCategory: { type: Sequelize.SMALLINT(), allowNull: false },
      fkGroup: { type: Sequelize.SMALLINT(), allowNull: false },
      description: { type: Sequelize.STRING(36) },
      ean: { type: Sequelize.STRING(20) },
      stock: { type: Sequelize.SMALLINT() },
      minStock: { type: Sequelize.SMALLINT() },
      buyPrice: { type: Sequelize.DOUBLE() },
      sellPrice: { type: Sequelize.DOUBLE(), allowNull: false },
      expectedDurability: { type: Sequelize.DOUBLE() },
      createdAt: { type: Sequelize.DATE() },
      updatedAt: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('Products');
  },
};
