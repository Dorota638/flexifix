import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('BicycleBrand', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
});
