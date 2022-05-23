import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('ProductInvoiceLine', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  fkSaleInvoiceId: { type: Sequelize.STRING(36), allowNull: true },
  fkRepairInvoiceId: { type: Sequelize.STRING(36), allowNull: true },
  fkProductId: { type: Sequelize.STRING(36), allowNull: false },
  amount: { type: Sequelize.SMALLINT(), allowNull: false },
  price: { type: Sequelize.DOUBLE(), allowNull: false },
});
