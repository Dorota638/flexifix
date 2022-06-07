import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('BicycleColor', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  color: { type: Sequelize.STRING(15), allowNull: false },
});
