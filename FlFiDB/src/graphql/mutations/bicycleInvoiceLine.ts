import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const BicycleInvoiceLine = require('../../models/BicycleInvoiceLine');

export const queryMutations = {
  createBicycleInvoiceLine: async (_: any, { input }: any) => {
    try {
      const bicycleInvoiceLine = await BicycleInvoiceLine.create({ id: UUIDV4(), ...input }).catch(
        errHandler
      );
      return bicycleInvoiceLine;
    } catch (err) {
      throw new Error(err);
    }
  },
};
