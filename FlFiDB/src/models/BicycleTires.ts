import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('BicycleTires', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  size: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});
