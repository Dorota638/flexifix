import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('RepairStatus', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  status: { type: Sequelize.STRING(30), allowNull: false },
});
