import { errHandler } from '../../helper';
const RentalInvoiceLine = require('../../models/RentalInvoiceLine');
const Bicycle = require('../../models/Bicycle');

export const queryResolvers = {
  async rentalInvoiceLines() {
    try {
      const rentalInvoiceLines = await RentalInvoiceLine.findAll({}).catch(
        errHandler
      );
      return rentalInvoiceLines;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {
  async bicycle(parent: any) {
    try {
      const bicycle = await Bicycle.findByPk(parent.fkBicycleId).catch(
        errHandler
      );
      return bicycle;
    } catch (err) {
      throw new Error(err);
    }
  },
};
