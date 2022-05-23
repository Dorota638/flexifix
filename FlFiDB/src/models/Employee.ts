import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('Employee', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING(25), allowNull: false },
  role: { type: Sequelize.SMALLINT() },
});
