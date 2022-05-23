import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('Employee', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  method: { type: Sequelize.STRING(15), allowNull: false },
});
