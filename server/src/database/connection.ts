import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('flexidb', 'root', 'root', {
  host: '78.46.225.149',
  port: 3306,
  dialect: 'mysql',
});

module.exports = sequelize;
