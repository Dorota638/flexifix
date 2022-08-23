import { errHandler } from '../../helper';
const { Account } = require('../../models/Account');

export const queryResolvers = {
  async getAccounts() {
    try {
      const account = await Account.findAll().catch(errHandler);
      return account;
    } catch (err) {
      throw new Error(err);
    }
  },
};
