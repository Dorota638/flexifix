'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        id: 1,
        fkSupplier: 1,
        fkBrand: 2,
        fkCategory: 3,
        fkGroup: 1,
        description: '12 speed',
        ean: 'PK045786',
        stock: 10,
        minStock: 1,
        buyPrice: 10,
        sellPrice: 20,
        expectedDurability: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        fkSupplier: 4,
        fkBrand: 3,
        fkCategory: 2,
        fkGroup: 1,
        description: '10-51T',
        ean: 'PK045786',
        stock: 2,
        minStock: 1,
        buyPrice: 10,
        sellPrice: 20,
        expectedDurability: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        fkSupplier: 1,
        fkBrand: 2,
        fkCategory: 3,
        fkGroup: 1,
        description: '6-8 speed',
        ean: 'PK045786',
        stock: 10,
        minStock: 1,
        buyPrice: 10,
        sellPrice: 20,
        expectedDurability: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        fkSupplier: 3,
        fkBrand: 3,
        fkCategory: 2,
        fkGroup: 2,
        description: 'PowerStop',
        ean: 'PK045786',
        stock: 10,
        minStock: 1,
        buyPrice: 10,
        sellPrice: 20,
        expectedDurability: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        fkSupplier: 5,
        fkBrand: 4,
        fkCategory: 1,
        fkGroup: 1,
        description: 'Stylo, center',
        ean: 'PK045786',
        stock: 10,
        minStock: 1,
        buyPrice: 10,
        sellPrice: 20,
        expectedDurability: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
