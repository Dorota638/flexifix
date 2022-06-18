import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

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

export const ProductInvoiceLine = sequelize.define('ProductInvoiceLine', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  fkSaleId: { type: Sequelize.STRING(36), allowNull: true },
  fkRepairId: { type: Sequelize.STRING(36), allowNull: true },
  fkProductId: { type: Sequelize.INTEGER(), allowNull: false },
  amount: { type: Sequelize.SMALLINT(), allowNull: false },
  price: { type: Sequelize.DOUBLE(), allowNull: false },
});

export const RentalInvoiceLine = sequelize.define('RentalInvoiceLine', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  fkRentalId: { type: Sequelize.STRING(36), allowNull: false },
  fkBicycleId: { type: Sequelize.STRING(36), allowNull: false },
});

export const TaskInvoiceLine = sequelize.define('TaskInvoiceLine', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  fkTask: { type: Sequelize.SMALLINT(), allowNull: false },
  fkRepairId: { type: Sequelize.STRING(36), allowNull: false },
  amount: { type: Sequelize.SMALLINT(), allowNull: false },
  time: { type: Sequelize.DOUBLE(), allowNull: false },
  price: { type: Sequelize.DOUBLE(), allowNull: false },
});
