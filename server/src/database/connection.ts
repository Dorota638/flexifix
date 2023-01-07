import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('flexidb', 'root', 'root', {
  host: '185.139.228.227',
  port: 3306,
  dialect: 'mysql',
});

module.exports = sequelize;
