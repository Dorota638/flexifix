import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

export const Customer = sequelize.define('Customer', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  firstName: { type: Sequelize.STRING(20), allowNull: false },
  lastName: { type: Sequelize.STRING(20), allowNull: false },
  fullName:{
    type: Sequelize.VIRTUAL,
    get():string{
      return`${this.firstName} ${this.lastName}`;
    }
  },
  company: { type: Sequelize.STRING(20), allowNull: true },
  cvr: { type: Sequelize.STRING(20), allowNull: true },
  phone: { type: Sequelize.STRING(15), allowNull: true },
  address: { type: Sequelize.STRING(36), allowNull: true },
  zipCode: { type: Sequelize.STRING(10), allowNull: true },
  city: { type: Sequelize.STRING(20), allowNull: true },
  email: { type: Sequelize.STRING(36), allowNull: true },
  idInfo: { type: Sequelize.STRING(36), allowNull: true },
});
