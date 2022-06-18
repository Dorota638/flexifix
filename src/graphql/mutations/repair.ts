import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const Repair = require('../../models/Repair');

export const queryMutations = {
  createRepair: async (_: any, { input }: any) => {
    try {
      const repair = await Repair.create({ id: UUIDV4(), ...input }).catch(
        errHandler
      );
      return repair;
    } catch (err) {
      throw new Error(err);
    }
  },
};
