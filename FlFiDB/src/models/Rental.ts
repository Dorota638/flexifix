import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('Rental', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  fkSalesPerson: { type: Sequelize.SMALLINT(), allowNull: false },
  fkBicycleId: { type: Sequelize.STRING(36), allowNull: false },
  fkCustomerId: { type: Sequelize.STRING(36), allowNull: false },
  periodStart: { type: Sequelize.DATE(), allowNull: false },
  periodEnd: { type: Sequelize.DATE(), allowNull: false },
  priceTotal: { type: Sequelize.DOUBLE(), allowNull: false },
  priceVAT: { type: Sequelize.DOUBLE(), allowNull: false },
  priceNetto: { type: Sequelize.DOUBLE(), allowNull: false },
  deposit: { type: Sequelize.DOUBLE(), allowNull: false },
  wireLock: { type: Sequelize.BOOLEAN(), allowNull: false },
  depositId: { type: Sequelize.BOOLEAN(), allowNull: false },
  returned: { type: Sequelize.DATE(), allowNull: false },
  workHours: { type: Sequelize.DOUBLE(), allowNull: true },
  active: { type: Sequelize.BOOLEAN(), allowNull: false },
});
