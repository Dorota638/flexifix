import { errHandler } from "../../helper";
const { Task } = require("../../models/Task");
import { v4 as UUIDV4 } from "uuid";

export const queryMutations = {
	createTask: async (_: any, { input }: any) => {
		try {
			const task = await Task.create({ id: UUIDV4(), ...input }).catch(errHandler);
			return task;
		} catch (err) {
			throw new Error(err);
		}
	},
};
