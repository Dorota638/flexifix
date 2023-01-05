import { errHandler } from '../../helper';

const { TaskInvoiceLine } = require('../../models/InvoiceLines');
const { Task } = require('../../models/Task');

export const queryResolvers = {
  async taskInvoiceLines(_: any, { repairId }: { repairId: string }) {
    try {
      const taskInvoiceLines = await TaskInvoiceLine.findAll({
        where: {fkRepairId: repairId},
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
      return task;
    } catch (err) {
      throw new Error(err);
    }
  },
};
