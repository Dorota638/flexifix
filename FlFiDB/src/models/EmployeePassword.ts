import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('EmployeePassword', {
  employeeId: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  password: {
    type: Sequelize.STRING(64),
  },
});
