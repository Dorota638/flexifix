import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('Bicycle', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  type: { type: Sequelize.STRING(20), allowNull: true },
  name: { type: Sequelize.STRING(20), allowNull: true },
  color: { type: Sequelize.SMALLINT(), allowNull: false },
  brand: { type: Sequelize.SMALLINT(), allowNull: false },
  gearsystem: { type: Sequelize.SMALLINT(), allowNull: false },
  status: { type: Sequelize.SMALLINT(), allowNull: false },
  tires: { type: Sequelize.SMALLINT(), allowNull: false },
  frameNumber: { type: Sequelize.STRING(20), allowNull: true },
  fkOwnerId: { type: Sequelize.STRING(36), allowNull: false },
  fkHolderId: { type: Sequelize.STRING(36), allowNull: false },
  fleetNr: { type: Sequelize.STRING(20), allowNull: true },
})

