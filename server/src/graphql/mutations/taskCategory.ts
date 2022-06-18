import { errHandler } from '../../helper';
const {TaskCategory} = require('../../models/Task');

export const queryMutations = {
  createTaskCategory: async (_: any, { input }: any) => {
    try {
      const taskCategory = await TaskCategory.create({ ...input }).catch(
        errHandler
      );
      return taskCategory;
    } catch (err) {
      throw new Error(err);
    }
  },
};
