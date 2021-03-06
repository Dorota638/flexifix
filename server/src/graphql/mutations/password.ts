import { errHandler } from '../../helper';
const bcrypt = require('bcrypt');
const { EmployeePassword, Employee } = require('../../models/Employee');

export const queryMutations = {
  changePassword: async (_: any, { input }: any) => {
    const employee = await Employee.findOne({ where: { name: input.name } });
    const [user, created] = await EmployeePassword.findOrCreate({
      where: { employeeId: employee.id ? employee.id : '' },
      defaults: {
        employeeId: employee.id,
        password: await bcrypt.hash(input.newPassword, 10).catch(errHandler),
      },
    });

    if (!created) {
      const verified = await bcrypt.compare(input.newPassword, user.password);
      if (verified === false) {
        return 'wrong password';
      }
      const hashedPassword = await bcrypt.hash(input.newPassword, 10);
      user.set({ password: hashedPassword });
      user.save();
      return 'password updated';
    } else {
      return `password crated for user with id ${user.employeeId}`;
    }
  },

  comparePassword: async (_: any, args: any) => {
    try {
      const employee = await Employee.findOne({ where: { id: args.id } });
      const employeePassword = await EmployeePassword.findByPk(args.id).catch(errHandler);
      const result = await bcrypt.compare(args.password, employeePassword.dataValues.password);

      if (result) {
        return { employee: employee };
      } else {
        throw new Error('Wrong name - password combination');
      }
    } catch (err) {
      throw new Error(err);
    }
  },
};
