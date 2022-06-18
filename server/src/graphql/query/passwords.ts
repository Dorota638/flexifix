import { errHandler } from '../../helper';
const bcrypt = require('bcrypt');
const {EmployeePassword} = require('../../models/Employee');

export const queryResolvers = {
  comparePassword: async (_: any, args: any) => {
    try {
      const employeePassword = await EmployeePassword.findByPk(
        args.employeeId
      ).catch(errHandler);
      const result = await bcrypt.compare(
        args.password,
        employeePassword.dataValues.password
      );

      return { result: result };
    } catch (err) {
      throw new Error(err);
    }
  },
};
