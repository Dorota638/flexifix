import { errHandler } from '../../helper';
const TaskCategory = require('../../models/TaskCategory');
const Task = require('../../models/Task');

export const queryResolvers = {

  async tasks() {
    try {
      const tasks = await Task.findAll({
      }).catch(errHandler);

      console.log('TASKSSSS');
      
      return tasks;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {
  taskCategory: async (parent: any) => {
    try {
      const taskCategories = await TaskCategory.findByPk(parent.fkTaskCategory)
      .catch(errHandler);
      return taskCategories;
    } catch (err) {
      throw new Error(err);
    }
  },
};
