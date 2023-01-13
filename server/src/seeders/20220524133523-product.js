'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        id: "3cbc6824-145d-42a6-8638-08006fa0e5dc",
        fkSupplier: "0cdbac3c-ca9d-4190-8e2c-c3c8af377688",
        fkBrand: "3639b200-8ca3-4a8d-b240-0d2ac9a3f60a",
        fkCategory: "1841c55d-fd09-48a8-b33f-e910e25b236e",
        fkGroup: '133c4bf5-58d7-47cc-bc92-c289fda669e5',
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
        id: "6c2d81d1-3926-4684-b52e-b155e914881a",
        fkSupplier: "52b736ce-64ca-40c6-9d9b-bc2f55c18908",
        fkBrand: "4ef0b68f-5e11-4419-9e14-3bdcfb30e0a9",
        fkCategory: "1841c55d-fd09-48a8-b33f-e910e25b236e",
        fkGroup: '133c4bf5-58d7-47cc-bc92-c289fda669e5',
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
        id: "fe03366d-3e5a-4389-a0bf-1afaa2e0ee1f",
        fkSupplier: "0cdbac3c-ca9d-4190-8e2c-c3c8af377688",
        fkBrand: "4ef0b68f-5e11-4419-9e14-3bdcfb30e0a9",
        fkCategory: "859b6693-0d2b-4f48-a355-61d94181faa7",
        fkGroup: '133c4bf5-58d7-47cc-bc92-c289fda669e5',
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
        id: "e9ad7e31-6dda-480c-9568-852e852ebf60",
        fkSupplier: "52b736ce-64ca-40c6-9d9b-bc2f55c18908",
        fkBrand: "3639b200-8ca3-4a8d-b240-0d2ac9a3f60a",
        fkCategory: "1841c55d-fd09-48a8-b33f-e910e25b236e",
        fkGroup: '133c4bf5-58d7-47cc-bc92-c289fda669e5',
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
        id: "f4a20427-0818-460a-a517-64a0b8400388",
        fkSupplier: "0cdbac3c-ca9d-4190-8e2c-c3c8af377688",
        fkBrand: "4ef0b68f-5e11-4419-9e14-3bdcfb30e0a9",
        fkCategory: "859b6693-0d2b-4f48-a355-61d94181faa7",
        fkGroup: '133c4bf5-58d7-47cc-bc92-c289fda669e5',
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
