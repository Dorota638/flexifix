import { v4 as UUIDV4 } from 'uuid';
const { getRentalNumber } = require('./../../helper');
const { errHandler } = require('../../helper');
const { Rental } = require('./../../models/Rental');
const { RentalInvoiceLine } = require('./../../models/InvoiceLines');
const { Bicycle } = require('../../models/Bicycle');

export const queryMutations = {
  createRental: async (_: any, { input }: any) => {
    try {
      const rental = await Rental.create({
        id: UUIDV4(),
        ...input,
        active: 1,
        number: getRentalNumber(),
      }).catch(errHandler);

      return rental;
    } catch (err) {
      throw new Error(err);
    }
  },

  returnRental: async (_: any, { rentalId }: any) => {
    try {
      const rental = await Rental.findByPk(rentalId).catch(errHandler);
      rental.set({ returned: new Date(), active: 0 });
      rental.save().catch(errHandler);

      const rentalInvoiceLines = await RentalInvoiceLine.findAll({
        where: { fkRentalId: rentalId },
      });

      for (const line of rentalInvoiceLines) {
        const rentedBike = await Bicycle.findByPk(line.fkBicycleId).catch(errHandler);
        rentedBike.set({ status: '951c7c29-4848-4220-ba30-07b9f42f3f88' });
        rentedBike.save().catch(errHandler);
      }

      return rental;
    } catch (err) {
      throw new Error(err);
    }
  },
};
