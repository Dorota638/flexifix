import { errHandler } from '../../helper';

const TaskInvoiceLine = require('../../models/TaskInvoiceLine');
const Task = require('../../models/Task');

export const queryResolvers = {
  async taskInvoiceLines() {
    try {
      const taskInvoiceLines = await TaskInvoiceLine.findAll({}).catch(
        errHandler
      );
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
