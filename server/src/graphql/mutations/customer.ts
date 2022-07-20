import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const { Customer } = require('../../models/Customer');

export const queryMutations = {
  createCustomer: async (_: any, { input }: any) => {
    try {
      const customer = await Customer.create({ id: UUIDV4(), ...input }).catch(
        errHandler
      );

      return customer;
    } catch (err) {
      throw new Error(err);
    }
  },

  editCustomer: async (_: any, { input }: any) => {
    try {
      const customer = await Customer.findByPk(input.id).catch(errHandler);
      customer.set({
        ...input,
      });
      customer.save().catch(errHandler);
      return customer;
    } catch (err) {
      throw new Error(err);
    }
  },
};
