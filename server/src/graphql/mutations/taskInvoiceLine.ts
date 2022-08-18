import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const { TaskInvoiceLine } = require('../../models/InvoiceLines');

export const queryMutations = {
  createTaskInvoiceLine: async (_: any, { input }: any) => {
    try {
      const taskInvoiceLine = await TaskInvoiceLine.create({
        id: UUIDV4(),
        ...input,
      }).catch(errHandler);
      return taskInvoiceLine;
    } catch (err) {
      throw new Error(err);
    }
  },
  deleteTaskInvoiceLine: async (_: any, { id }: any) => {
    try {
      const taskInvoiceLine = await TaskInvoiceLine.destroy({
        where: {
          id: id,
        },
      }).catch(errHandler);
      return { deleted: taskInvoiceLine };
    } catch (err) {
      throw new Error(err);
    }
  },
};
