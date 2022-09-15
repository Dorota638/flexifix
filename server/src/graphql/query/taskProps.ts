import { errHandler } from '../../helper';
import { TaskCategory } from '../../models/Task';

export const queryResolvers = {
  async taskProps() {
    try {
      const category = await TaskCategory.findAll().catch(errHandler);
      const props = {
        category,
      };
      return props;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {};
