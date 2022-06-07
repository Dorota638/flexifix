import { errHandler } from '../../helper';
const Task = require('../../models/Task');

export const queryMutations = {
  createTask: async (_: any, { input }: any) => {
    try {
      const task = await Task.create({ ...input }).catch(
        errHandler
      );
      return task;
    } catch (err) {
      throw new Error(err);
    }
  },
};
