import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('RentalInvoice', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  number: { type: Sequelize.STRING(10), allowNull: false },
  fkRentalId: { type: Sequelize.STRING(36), allowNull: false },
  fkAccount: { type: Sequelize.SMALLINT(), allowNull: false },
  fkPaymentMethod: { type: Sequelize.SMALLINT(), allowNull: false },
  priceTotal: { type: Sequelize.DOUBLE(), allowNull: false },
  priceVAT: { type: Sequelize.DOUBLE(), allowNull: false },
  priceNetto: { type: Sequelize.DOUBLE(), allowNull: false },
});
