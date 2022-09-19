import { getRentalNumber } from './../../helper';
import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const { Rental } = require('../../models/Rental');

export const queryMutations = {
  createRental: async (_: any, { input }: any) => {
    try {
      const rental = await Rental.create({
        id: UUIDV4(),
        ...input,
        number: getRentalNumber(),
      }).catch(errHandler);
      return rental;
    } catch (err) {
      throw new Error(err);
    }
  },
};
