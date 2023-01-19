import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('flexidb', 'root', 'root', {
  host: 'kalinovskyklin.xyz',
  port: 3306,
  dialect: 'mysql',
});

module.exports = sequelize;
