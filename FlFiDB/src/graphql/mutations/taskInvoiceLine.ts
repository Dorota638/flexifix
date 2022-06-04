import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const TaskInvoiceLine = require('../../models/TaskInvoiceLine');

export const queryMutations = {
  createTaskInvoiceLine: async (_: any, { input }: any) => {
    try {
      console.log('args', input);
      const taskInvoiceLine = await TaskInvoiceLine.create({ id: UUIDV4(), ...input }).catch(
        errHandler
      );
      return taskInvoiceLine;
    } catch (err) {
      throw new Error(err);
    }
  },
};
