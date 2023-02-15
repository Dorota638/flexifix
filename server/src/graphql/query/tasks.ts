import { errHandler } from "../../helper";
const { Task, TaskCategory } = require("../../models/Task");
import { Op } from "sequelize";

export const queryResolvers = {
	async tasks() {
		try {
			const tasks = await Task.findAll().catch(errHandler);
			return tasks;
		} catch (err) {
			throw new Error(err);
		}
	},
	async taskByName(_: any, args: { name: string }) {
		try {
			const tasks = await Task.findAll({
				where: {
					name: {
						[Op.startsWith]: args.name[0],
					},
				},
			}).catch(errHandler);
			return tasks;
		} catch (err) {
			throw new Error(err);
		}
	},
	async taskByCategory(_: any, args: { categoryId: string }) {
		try {
			const tasks = await Task.findAll({
				where: {
					fkTaskCategory: args.categoryId,
				},
			}).catch(errHandler);
			return tasks;
		} catch (err) {
			throw new Error(err);
		}
	},
	taskCategory: async (parent: any) => {
		try {
			const taskCategories = await TaskCategory.findAll().catch(errHandler);
			return taskCategories;
		} catch (err) {
			throw new Error(err);
		}
	},
};

export const resolvers = {
	taskCategory: async (parent: any) => {
		try {
			console.log("halo");

			const taskCategories = await TaskCategory.findByPk(parent.fkTaskCategory).catch(errHandler);
			return taskCategories;
		} catch (err) {
			throw new Error(err);
		}
	},
};
