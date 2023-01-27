import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

export const Task = sequelize.define('Task', {
  id: {
    type: Sequelize.SMALLINT(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING(25), allowNull: false },
  fkTaskCategory: { type: Sequelize.STRING(36), allowNull: false },
  fkProductCategoryId: { type : Sequelize.STRING(36), allowNull: true},
  duration: { type: Sequelize.DOUBLE, allowNull: false },
});

export const TaskCategory = sequelize.define('TaskCategory', {
  id: {
    type: Sequelize.STRING(36),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },

});
