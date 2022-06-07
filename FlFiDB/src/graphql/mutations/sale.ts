import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const Sale = require('../../models/Sale');

export const queryMutations = {
  createSale: async (_: any, { input }: any) => {
    try {
      const sale = await Sale.create({ id: UUIDV4(), ...input }).catch(
        errHandler
      );
      return sale;
    } catch (err) {
      throw new Error(err);
    }
  },
};
