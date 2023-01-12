import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

export const Product = sequelize.define('Product', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  fkSupplier: { type: Sequelize.UUIDV4() },
  fkBrand: { type: Sequelize.UUIDV4(), allowNull: false },
  fkCategory: { type: Sequelize.UUIDV4(), allowNull: false },
  fkGroup: { type: Sequelize.STRING(36), allowNull: false },
  description: { type: Sequelize.STRING(36) },
  ean: { type: Sequelize.STRING(20) },
  stock: { type: Sequelize.SMALLINT() },
  minStock: { type: Sequelize.SMALLINT() },
  buyPrice: { type: Sequelize.DOUBLE() },
  sellPrice: { type: Sequelize.DOUBLE(), allowNull: false },
  expectedDurability: { type: Sequelize.DOUBLE() },
});

export const ProductBrand = sequelize.define('ProductBrand', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  value: { type: Sequelize.STRING(20), allowNull: false },
});

export const ProductCategory = sequelize.define('ProductCategory', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  value: { type: Sequelize.STRING(20), allowNull: false },
});

export const ProductGroup = sequelize.define('ProductGroup', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  value: { type: Sequelize.STRING(20), allowNull: false },
});

export const ProductSupplier = sequelize.define('ProductSupplier', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  value: { type: Sequelize.STRING(20), allowNull: false },
  minOrder: { type: Sequelize.SMALLINT(), allowNull: true },
});
