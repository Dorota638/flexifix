import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('BicycleColor', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  colorName: { type: Sequelize.STRING(15), allowNull: false },
});
