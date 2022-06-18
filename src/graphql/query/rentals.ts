import { errHandler } from '../../helper';
const Rental = require('../../models/Rental');
const PaymentMethod = require('../../models/PaymentMethod');
const Account = require('../../models/Account');
const Customer = require('../../models/Customer');
const {Employee} = require('../../models/Employee');
const {RentalInvoiceLine} = require('../../models/InvoiceLines');

export const queryResolvers = {
  rentals: async (_: any, { customerId }) => {
    try {
      if (customerId) {
        const rentals = await Rental.findAll({
          where: { fkCustomerId: customerId },
        }).catch(errHandler);
        return rentals;
      } else {
        const rentals = await Rental.findAll().catch(errHandler);
        console.log();
        
        return rentals;
      }
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
  account: async (parent: any) => {
    try {
      const account = await Account.findByPk(parent.fkAccount).catch(
        errHandler
      );
      return account;
    } catch (err) {
      throw new Error(err);
    }
  },
  rentalInvoiceLines: async (parent: any) => {
    try {
      const rentalInvoiceLines = await RentalInvoiceLine.findAll({
        where: { fkRentalId: parent.id },
      }).catch(errHandler);
      console.log('RentalInvoiceLine', rentalInvoiceLines);
      
      return rentalInvoiceLines;
    } catch (err) {
      throw new Error(err);
    }
  },
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
  salesPerson: async (parent: any) => {
    try {
      const salesPerson = await Employee.findByPk(parent.fkSalesPersonId).catch(
        errHandler
      );
      return salesPerson;
    } catch (err) {
      throw new Error(err);
    }
  },

  // : async (parent: any, args: any, context: any) => {
  //   try {
  //     const  = await .findByPk(parent.)
  //     .catch(errHandler);
  //     return ;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
};
