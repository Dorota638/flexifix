import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('BicycleInvoiceLine', {
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
