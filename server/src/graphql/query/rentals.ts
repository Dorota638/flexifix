import { errHandler } from '../../helper';
const { Rental } = require('../../models/Rental');
const { PaymentMethod } = require('../../models/PaymentMethod');
const { Customer } = require('../../models/Customer');
const { Employee } = require('../../models/Employee');
const { Bicycle } = require('../../models/Bicycle');

export const queryResolvers = {
  rentals: async (_: any, { customerId }:{ customerId: string }) => {
    try {
      if (customerId) {
        const rentals = await Rental.findAll({
          where: { fkCustomerId: customerId },
        }).catch(errHandler);
        return rentals;
      } else {
        const rentals = await Rental.findAll().catch(errHandler);
        return rentals;
      }
    } catch (err) {
      throw new Error(err);
    }
  },
};
export const resolvers = {
  bicycle: async (parent: any) => {
    try {
      const bicycle = await Bicycle.findByPk(parent.fkBicycleId).catch(errHandler);
      return bicycle;
    } catch (err) {
      throw new Error(err);
    }
  },

  paymentMethod: async (parent: any) => {
    try {
      const method = await PaymentMethod.findByPk(parent.fkPaymentMethod).catch(errHandler);
      return method;
    } catch (err) {
      throw new Error(err);
    }
  },

  customer: async (parent: any) => {
    try {
      const customer = await Customer.findByPk(parent.fkCustomerId).catch(errHandler);
      return customer;
    } catch (err) {
      throw new Error(err);
    }
  },
  salesPerson: async (parent: any) => {
    try {
      const salesPerson = await Employee.findByPk(parent.fkSalesPersonId).catch(errHandler);
      return salesPerson;
    } catch (err) {
      throw new Error(err);
    }
  },
};
