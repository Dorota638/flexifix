import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const Bicycle = require('../../models/Bicycle');

export const queryMutations = {
  createBicycle: async (_: any, { input }: any) => {
    try {
      const bicycle = await Bicycle.create({ id: UUIDV4(), ...input }).catch(
        errHandler
      );
      return bicycle;
    } catch (err) {
      throw new Error(err);
    }
  },
};
