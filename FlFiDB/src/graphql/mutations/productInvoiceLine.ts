import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const ProductInvoiceLine = require('../../models/ProductInvoiceLine');

export const queryMutations = {
  createProductInvoiceLine: async (_: any, { input }: any) => {
    try {
      const productInvoiceLine = await ProductInvoiceLine.create({
        id: UUIDV4(),
        ...input,
      }).catch(errHandler);
      return productInvoiceLine;
    } catch (err) {
      throw new Error(err);
    }
  },
};
