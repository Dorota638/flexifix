import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('Sale', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  customerId: { type: Sequelize.STRING(36), allowNull: false },
  salespersonId: { type: Sequelize.SMALLINT(), allowNull: false },
  priceTotal: { type: Sequelize.DOUBLE(), allowNull: false },
  priceVAT: { type: Sequelize.DOUBLE(), allowNull: false },
  priceNetto: { type: Sequelize.DOUBLE(), allowNull: false },
});
