import { errHandler } from '../../helper';
const bcrypt = require('bcrypt');
const EmployeePassword = require('../../models/EmployeePassword');

export const queryMutations = {
  createHashedPassword: async (_: any, { input }: any) => {
    try {
      const hashedPassword = await bcrypt.hash(input.password, 10);
      const employeePassword = await EmployeePassword.create({
        password: hashedPassword,
        employeeId: input.employeeId,
      }).catch(errHandler);
      console.log('input', input);

      return true;
    } catch (err) {
      throw new Error(err);
    }
  },
};
