import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const Sale = require('../../models/Sale');

export const queryMutations = {
  createSale: async (_: any, { input }: any) => {
    console.log('input', input);

    try {
      const sale = await Sale.create({
        id: UUIDV4(),
        ...input,
        fkAccount: input.paymentMethod === 1 ? 1 : 2,
        number:"sale123"
      }).catch(errHandler);
      return sale;
    } catch (err) {
      throw new Error(err);
    }
  },
};
