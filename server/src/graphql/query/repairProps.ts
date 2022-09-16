import { errHandler } from '../../helper';
const { RepairStatus } = require('../../models/Repair');

export const queryResolvers = {
  async repairStatuses() {
    try {
      const status = await RepairStatus.findAll().catch(errHandler);
      // const props = {
      //   repairStatus,
      // };
      console.log('status', status);
      
      return status;
    } catch (err) {
      throw new Error(err);
    }
  },
};
