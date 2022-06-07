import { errHandler } from '../../helper';
const Account = require('../../models/Account');

export const queryMutations = {
  addToAccount: async (_: any, { input }: any) => {
    try {
      const account = await Account.update(
        { total: input.amount },
        {
          where: {
            id: input.id,
          },
        }
      ).catch(errHandler);
      return account;
    } catch (err) {
      throw new Error(err);
    }
  },
};
