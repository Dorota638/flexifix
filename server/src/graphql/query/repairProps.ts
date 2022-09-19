import { errHandler } from '../../helper';
const { RepairStatus } = require('../../models/Repair');

export const queryResolvers = {
  async repairStatuses() {
    try {
      const status = await RepairStatus.findAll().catch(errHandler);
      return status;
    } catch (err) {
      throw new Error(err);
    }
  },
};
