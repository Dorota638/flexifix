import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

export const Bicycle = sequelize.define('Bicycle', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  type: { type: Sequelize.STRING(20), allowNull: true },
  name: { type: Sequelize.STRING(20), allowNull: true },
  color: { type: Sequelize.SMALLINT(), allowNull: false },
  brand: { type: Sequelize.SMALLINT(), allowNull: false },
  gearsystem: { type: Sequelize.SMALLINT(), allowNull: false },
  status: { type: Sequelize.SMALLINT(), allowNull: false },
  tires: { type: Sequelize.SMALLINT(), allowNull: false },
  frameNumber: { type: Sequelize.STRING(20), allowNull: true },
  fkOwnerId: { type: Sequelize.STRING(36), allowNull: false },
  fkHolderId: { type: Sequelize.STRING(36), allowNull: false },
  fleetNr: { type: Sequelize.STRING(20), allowNull: true },
});

export const BicycleBrand = sequelize.define('BicycleBrand', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
});

export const BicycleTires = sequelize.define('BicycleTires', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  size: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});

export const BicycleColor = sequelize.define('BicycleColor', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  color: { type: Sequelize.STRING(15), allowNull: false },
});

export const BicycleGearsystem = sequelize.define(
  'BicycleGearsystem',
  {
    id: {
      type: Sequelize.SMALLINT(),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

export const BicycleInvoiceLine = sequelize.define('BicycleInvoiceLine', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  fkSaleId: { type: Sequelize.STRING(36), allowNull: false },
  fkBicycleId: { type: Sequelize.STRING(36), allowNull: false },
  price: { type: Sequelize.DOUBLE(), allowNull: false },
});

export const BicycleStatus = sequelize.define(
  'BicycleStatus',
  {
    id: {
      type: Sequelize.SMALLINT(),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
