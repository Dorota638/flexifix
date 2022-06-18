import { errHandler } from '../../helper';
const Account = require('../../models/Account');

export const queryMutations = {
  addToAccount: async (_: any, { input }: any) => {
    try {
      const account = await Account.findByPk(input.id).catch(errHandler);
      account.set({
        total: account.total + input.amount,
      });
      await account.save().catch(errHandler);
      console.log('account', account);
      
      return account;
    } catch (err) {
      throw new Error(err);
    }
  },
};
