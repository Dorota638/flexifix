import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('TaskInvoiceLine', {
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
