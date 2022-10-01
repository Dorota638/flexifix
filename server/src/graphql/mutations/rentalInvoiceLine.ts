import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const { Bicycle } = require('../../models/Bicycle');
const { RentalInvoiceLine } = require('../../models/InvoiceLines');

export const queryMutations = {
  createRentalInvoiceLine: async (_: any, { input }: any) => {
    try {
      const rentalInvoiceLine = await RentalInvoiceLine.create({
        id: UUIDV4(),
        ...input,
      }).catch(errHandler);

      const rentedBike = await Bicycle.findByPk(input.fkBicycleId).catch(errHandler);
      rentedBike.set({ status: '7fd4665d-e55d-4562-b615-52044244e69d' });
      rentedBike.save().catch(errHandler);

      return rentalInvoiceLine;
    } catch (err) {
      throw new Error(err);
    }
  },
};
