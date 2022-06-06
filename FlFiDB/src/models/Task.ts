import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('Task', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING(25), allowNull: false },
  fkTaskCategory: { type: Sequelize.SMALLINT, allowNull: false },
  duration: { type: Sequelize.DOUBLE, allowNull: false },
});
