import { Sale } from '../../models/Sale';
import { errHandler } from '../../helper';

const {
  BicycleInvoiceLine,
  ProductInvoiceLine,
} = require('../../models/InvoiceLines');
const PaymentMethod = require('../../models/PaymentMethod');
const { Customer } = require('../../models/Customer');
const { Employee } = require('../../models/Employee');

export const queryResolvers = {
  async sales(_: any) {
    try {
      const sale = await Sale.findAll().catch(errHandler);
      // const saleLines = await ProductInvoiceLine.findAll({
      //   where: (sale.fkSaleId = sale.id),
      // });
      return sale;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {
  paymentMethod: async (parent: any) => {
    try {
      const method = await PaymentMethod.findByPk(parent.fkPaymentMethod).catch(
        errHandler
      );
      return method;
    } catch (err) {
      throw new Error(err);
    }
  },

  // account: async (parent: any) => {
  //   try {
  //     const account = await Account.findByPk(parent.fkAccount).catch(
  //       errHandler
  //     );
  //     return account;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
  customer: async (parent: any) => {
    try {
      const customer = await Customer.findByPk(parent.fkCustomerId).catch(
        errHandler
      );
      return customer;
    } catch (err) {
      throw new Error(err);
    }
  },
  salesperson: async (parent: any) => {
    try {
      const salesPerson = await Employee.findByPk(parent.fkSalespersonId).catch(
        errHandler
      );
      return salesPerson;
    } catch (err) {
      throw new Error(err);
    }
  },
  async productInvoiceLines(parent: any) {
    try {
      const productInvoiceLines = await ProductInvoiceLine.findAll({
        where: { fkSaleId: parent.id },
      }).catch(errHandler);
      return productInvoiceLines;
    } catch (err) {
      throw new Error(err);
    }
  },

  async bicycleInvoiceLines(parent: any) {
    try {
      const bicycleInvoiceLines = await BicycleInvoiceLine.findAll({
        where: { fkSaleId: parent.id },
      }).catch(errHandler);

      return bicycleInvoiceLines;
    } catch (err) {
      throw new Error(err);
    }
  },
};
