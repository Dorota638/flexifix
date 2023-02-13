import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

export const Employee = sequelize.define('Employee', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING(25), allowNull: false },
  role: { type: Sequelize.SMALLINT() },
});
export const EmployeePassword = sequelize.define('EmployeePassword', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  password: {
    type: Sequelize.STRING(64),
  },
});
