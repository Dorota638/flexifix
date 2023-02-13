import { errHandler } from "../../helper";
const bcrypt = require("bcrypt");
const { EmployeePassword, Employee } = require("../../models/Employee");

export const queryResolvers = {
	comparePassword: async (_: any, args: any) => {
		try {
			const employee = await Employee.findOne({ where: { name: args.name } });
			const employeePassword = await EmployeePassword.findByPk(employee.id).catch(errHandler);
			const result = await bcrypt.compare(args.password, employeePassword.dataValues.password);

			if (result) {
				return { employee: employee };
			} else {
				return { error: "Wrong name - password combination" };
			}
		} catch (err) {
			throw new Error(err);
		}
	},
};
