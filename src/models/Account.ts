import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('Account', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING(10), allowNull: false },
  total: { type: Sequelize.INTEGER(), allowNull: false },
});
