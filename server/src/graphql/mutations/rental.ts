import { v4 as UUIDV4 } from 'uuid';
import { getRentalNumber } from './../../helper';
import { errHandler } from '../../helper';
import { Bicycle } from './../../models/Bicycle';
import { Rental } from './../../models/Rental';

export const queryMutations = {
  createRental: async (_: any, { input }: any) => {
    try {
      const rental = await Rental.create({
        id: UUIDV4(),
        ...input,
        active: 1,
        number: getRentalNumber(),
      }).catch(errHandler);
      const rentedBike = await Bicycle.findByPk(input.fkBicycleId).catch(errHandler);
      rentedBike.set({ status: '7fd4665d-e55d-4562-b615-52044244e69d' });
      rentedBike.save().catch(errHandler);
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
      
      const rentedBike = await Bicycle.findByPk(rental.fkBicycleId).catch(errHandler);
      rentedBike.set({ status: '951c7c29-4848-4220-ba30-07b9f42f3f88' });
      rentedBike.save().catch(errHandler);

      return rental;
    } catch (err) {
      throw new Error(err);
    }
  },
};
