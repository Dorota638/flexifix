import { v4 as UUIDV4 } from 'uuid';
const bcrypt = require("bcrypt");
const { EmployeePassword, Employee } = require("../../models/Employee");

export const queryMutations = {
	createEmployee: async (_: any, { input }: any) => {

		const employee = await Employee.create({
			id: UUIDV4(),
			name: input.name,
		});

		const hashedPassword = await bcrypt.hash(input.password, 10);

		await EmployeePassword.create({
			id: employee.id,
			password: hashedPassword,
		});

		return employee;
	},
};
