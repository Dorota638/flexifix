import { errHandler } from '../../helper';
const { Employee } = require('../../models/Employee');

export const queryResolvers = {
  employees: async (_: any, args: any) => {
    try {
      const employees = await Employee.findAll().catch(errHandler);
      return employees;
    } catch (err) {
      throw new Error(err);
    }
  },
};
