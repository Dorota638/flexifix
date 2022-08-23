import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

export const Sale = sequelize.define('Sale', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  number: { type: Sequelize.STRING(10), allowNull: false },
  fkPaymentMethod: { type: Sequelize.SMALLINT(), allowNull: false },
  fkAccount: { type: Sequelize.SMALLINT(), allowNull: false },
  fkCustomerId: { type: Sequelize.STRING(36), allowNull: true },
  fkSalespersonId: { type: Sequelize.SMALLINT(), allowNull: false },
});
