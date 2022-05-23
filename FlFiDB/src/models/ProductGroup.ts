import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('ProductGroup', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING(20), allowNull: false },
});
