import { RepairType } from './../../types';
import { getRepairNumber } from "./../../helper";
import { v4 as UUIDV4 } from "uuid";
import { errHandler } from "../../helper";
const { Repair } = require("../../models/Repair");

export const queryMutations = {
	createRepair: async (_: any, { input }: any) => {
		try {
			const repair: RepairType = await Repair.create({
				id: UUIDV4(),
				...input,
				number: getRepairNumber(),
			}).catch(errHandler);
			return repair;
		} catch (err) {
			throw new Error(err);
		}
	},
	editRepair: async (_: any, { input }: any) => {
		try {
			const repair = await Repair.findByPk(input.id).catch(errHandler);
			repair.set({
				...input,
				// status: ,
				// fkTechnicianId: input.fkTechnicianId,
				// dateStarted: new Date()
			});
			await repair.save();
			return repair;
		} catch (err) {
			throw new Error(err);
		}
	},
};
