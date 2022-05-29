import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('Repair', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  number: { type: Sequelize.STRING(10), allowNull: false },
  fkPaymentMethod: { type: Sequelize.SMALLINT(), allowNull: false },
  fkAccount: { type: Sequelize.SMALLINT(), allowNull: false },
  fkBicycleId: { type: Sequelize.STRING(36), allowNull: false },
  fkCustomerId: { type: Sequelize.STRING(36), allowNull: false },
  status: { type: Sequelize.SMALLINT(), allowNull: false },
  fkTakenBy: { type: Sequelize.SMALLINT(), allowNull: false },
  fkTechnicianId: { type: Sequelize.SMALLINT(), allowNull: true },
  dateStarted: { type: Sequelize.DATE(), allowNull: true },
  dateFinished: { type: Sequelize.DATE(), allowNull: true },
  dateReturned: { type: Sequelize.DATE(), allowNull: true },
  fkSpareBicycleId: { type: Sequelize.STRING(36), allowNull: true },
  comment: { type: Sequelize.STRING(50), allowNull: true },
});
