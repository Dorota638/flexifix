import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('ProductInvoiceLine', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  fkTask: { type: Sequelize.SMALLINT(), allowNull: false },
  fkRepairInvoiceId: { type: Sequelize.STRING(36), allowNull: false },
  amount: { type: Sequelize.SMALLINT(), allowNull: false },
  time: { type: Sequelize.STRING(5), allowNull: false },
  price: { type: Sequelize.DOUBLE(), allowNull: false },
});
