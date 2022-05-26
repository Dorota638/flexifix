import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define(
  'BicycleGearsystem',
  {
    id: {
      type: Sequelize.SMALLINT(),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    type: { type: Sequelize.STRING(20), allowNull: false },
  },
  { freezeTableName: true }
);
