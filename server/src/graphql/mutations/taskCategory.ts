import { errHandler } from '../../helper';
const { TaskCategory } = require('../../models/Task');
import { v4 as UUIDV4 } from 'uuid';

export const queryMutations = {
  createTaskCategory: async (_: any, { input }: any) => {
    try {
      const taskCategory = await TaskCategory.create({ id:UUIDV4(), ...input }).catch(errHandler);
      return taskCategory;
    } catch (err) {
      throw new Error(err);
    }
  },
};
