import { errHandler } from '../../helper';
const bcrypt = require('bcrypt');
const { EmployeePassword } = require('../../models/Employee');

export const queryMutations = {
  changePassword: async (_: any, { input }: any) => {
    const [user, created] = await EmployeePassword.findOrCreate({
      where: { employeeId: input.employeeId ? input.employeeId : '' },
      defaults: {
        employeeId: input.id,
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
};
