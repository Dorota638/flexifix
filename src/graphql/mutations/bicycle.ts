import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const { Bicycle } = require('../../models/Bicycle');
const { Customer } = require('../../models/Customer');


export const queryMutations = {
  createBicycle: async (_: any, { input }: any) => {
    try {
      const checkCustomer = await Customer.findByPk(input.fkOwnerId);
      if (!checkCustomer) {
        return new Error("Customer doesn't exist");
      }
      const bicycle = await Bicycle.create({ id: UUIDV4(), ...input }).catch(
        errHandler
      );
      return bicycle;
    } catch (err) {
      throw new Error(err);
    }
  },

  editBicycle: async (_: any, { input }: any) => {
    try {
      const bicycle = await Bicycle.findByPk(input.id).catch(errHandler);
      bicycle.set({
        ...input,
      });
      await bicycle.save();
      return bicycle;
    } catch (err) {
      throw new Error(err);
    }
  },
};
