import { errHandler } from '../../helper';
const bcrypt = require('bcrypt');
const EmployeePassword = require('../../models/EmployeePassword');

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
      console.log(result);

      return { result: result };
    } catch (err) {
      throw new Error(err);
    }
  },
};
