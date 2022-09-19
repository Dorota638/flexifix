import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

export const Rental = sequelize.define('Rental', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  number: { type: Sequelize.STRING(10), allowNull: false },
  fkSalesPersonId: { type: Sequelize.SMALLINT(), allowNull: false },
  fkCustomerId: { type: Sequelize.STRING(36), allowNull: false },
  fkBicycleId: { type: Sequelize.STRING(36), allowNull: false },
  periodStart: { type: Sequelize.DATE(), allowNull: false },
  periodEnd: { type: Sequelize.DATE(), allowNull: false },
  fkAccount: { type: Sequelize.SMALLINT(), allowNull: true },
  fkPaymentMethod: { type: Sequelize.SMALLINT(), allowNull: true },
  deposit: { type: Sequelize.SMALLINT(), allowNull: true },
  wireLock: { type: Sequelize.BOOLEAN(), allowNull: true },
  depositId: { type: Sequelize.BOOLEAN(), allowNull: true },
  returned: { type: Sequelize.DATE(), allowNull: true },
  workHours: { type: Sequelize.DOUBLE(), allowNull: true },
  active: { type: Sequelize.BOOLEAN(), allowNull: true },
});
