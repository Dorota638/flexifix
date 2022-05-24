import Sequelize from 'sequelize';
const sequelize = require('../database/connection');

module.exports = sequelize.define('RentalInvoiceLine', {
  id: {
    type: Sequelize.UUIDV4(),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  fkRentalInvoiceId: { type: Sequelize.STRING(36), allowNull: false },
  fkBicycleId: { type: Sequelize.STRING(36), allowNull: false },
});

// number: { type: Sequelize.STRING(10) },
// fkPaymentMethod: { type: Sequelize.SMALLINT() },
// fkRepairId: { type: Sequelize.STRING(36) },
// paid: { type: Sequelize.DATE() },
// laborNetto: { type: Sequelize.DOUBLE() },
// laborVAT: { type: Sequelize.DOUBLE() },
// laborTotal: { type: Sequelize.DOUBLE() },
// partsNetto: { type: Sequelize.DOUBLE() },
// partsVAT: { type: Sequelize.DOUBLE() },
// partsTotal: { type: Sequelize.DOUBLE() },
// exptasNetto: { type: Sequelize.DOUBLE() },
// exptasVAT: { type: Sequelize.DOUBLE() },
// exptasTotal: { type: Sequelize.DOUBLE() },
// priceNetto: { type: Sequelize.DOUBLE() },
// priceVAT: { type: Sequelize.DOUBLE() },
// priceTotal: { type: Sequelize.DOUBLE() },
// tip: { type: Sequelize.DOUBLE() },
// account: { type: Sequelize.SMALLINT() },
