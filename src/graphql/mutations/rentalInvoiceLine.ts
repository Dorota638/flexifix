import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const { RentalInvoiceLine } = require('../../models/InvoiceLines');

export const queryMutations = {
  createRentalInvoiceLine: async (_: any, { input }: any) => {
    try {
      const rentalInvoiceLine = await RentalInvoiceLine.create({
        id: UUIDV4(),
        ...input,
      }).catch(errHandler);
      return rentalInvoiceLine;
    } catch (err) {
      throw new Error(err);
    }
  },
};
