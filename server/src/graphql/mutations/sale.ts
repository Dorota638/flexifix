import { getSaleNumber } from './../../helper';
import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
import { Sale } from '../../models/Sale';

export const queryMutations = {
  createSale: async (_: any, { input }: any) => {
    try {
      const sale = await Sale.create({
        id: UUIDV4(),
        ...input,
        fkAccount: input.paymentMethod === 1 ? 1 : 2,
        number: getSaleNumber(),
      }).catch(errHandler);

      return sale;
    } catch (err) {
      throw new Error(err);
    }
  },
};
