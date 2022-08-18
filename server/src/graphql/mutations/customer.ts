import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const { Customer } = require('../../models/Customer');

export const queryMutations = {
  createEditCustomer: async (_: any, { input }: any) => {
    if (input.id) {
      try {
        const customer = await Customer.findByPk(input.id).catch(errHandler);
        customer.set({ ...input });
        customer.save()
        return customer;
      } catch (err) {
        throw new Error(err);
      }
    } else {
      try {
        const customer = await Customer.create({ id: UUIDV4(), ...input }).catch(errHandler);

        return customer;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
};
