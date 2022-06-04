import { errHandler } from '../../helper';

const TaskInvoiceLine = require('../../models/TaskInvoiceLine');
const Task = require('../../models/Task');

// Repair.hasMany(TaskInvoiceLine, { as: 'Tasks', foreignKey: 'fkRepairId' });

export const queryResolvers = {
  async taskInvoiceLines() {
    try {
      const taskInvoiceLines = await TaskInvoiceLine.findAll({
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
      console.log('parent.fkTask', parent.fkTask);
      return task;
    } catch (err) {
      throw new Error(err);
    }
  },

  

  // : async (parent: any, args: any, context: any) => {
  //   try {
  //     const  = await .findByPk(parent.)
  //     .catch(errHandler);
  //     return ;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
};
