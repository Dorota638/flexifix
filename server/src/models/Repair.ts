import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

export const Repair = sequelize.define('Repair', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  number: { type: Sequelize.STRING(10), allowNull: false },
  fkPaymentMethod: { type: Sequelize.SMALLINT(), allowNull: true },
  // fkAccount: { type: Sequelize.SMALLINT(), allowNull: true },
  fkBicycleId: { type: Sequelize.STRING(36), allowNull: false },
  fkCustomerId: { type: Sequelize.STRING(36), allowNull: false },
  status: { type: Sequelize.STRING(36), allowNull: false },
  fkTakenBy: { type: Sequelize.STRING(36), allowNull: false },
  fkTechnicianId: { type: Sequelize.STRING(36), allowNull: true },
  dateStarted: { type: Sequelize.DATE(), allowNull: true },
  dateFinished: { type: Sequelize.DATE(), allowNull: true },
  dateReturned: { type: Sequelize.DATE(), allowNull: true },
  fkSpareBicycleId: { type: Sequelize.STRING(36), allowNull: true },
  comment: { type: Sequelize.STRING(50), allowNull: true },
});

export const RepairStatus = sequelize.define( 'RepairStatus',
  {
    id: {
      type: Sequelize.STRING(36),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    value: { type: Sequelize.STRING(30), allowNull: false },
  },
  { freezeTableName: true }
);
