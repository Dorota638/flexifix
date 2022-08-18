import { errHandler } from '../../helper';

const { TaskInvoiceLine } = require('../../models/InvoiceLines');
const { Task } = require('../../models/Task');

export const queryResolvers = {
  async taskInvoiceLines(_: any, { repairId }) {
    try {
      let whereStatement = {};
      if (repairId) {
        whereStatement = { fkRepairId: repairId };
      }
      const taskInvoiceLines = await TaskInvoiceLine.findAll({
        where: whereStatement,
      }).catch(errHandler);
      return taskInvoiceLines;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {
  async task(parent: any) {
    try {
      const task = await Task.findByPk(parent.fkTask).catch(errHandler);
      console.log('task', task);
      return task;
    } catch (err) {
      throw new Error(err);
    }
  },
};
