import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const { ProductInvoiceLine } = require('../../models/InvoiceLines');

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
  deleteProductInvoiceLine: async (_: any, { id }: any) => {
    try {
      const productInvoiceLine = await ProductInvoiceLine.destroy({
        where: {
          id: id,
        },
      }).catch(errHandler);
      return { deleted: productInvoiceLine };
    } catch (err) {
      throw new Error(err);
    }
  },
};
