"use strict";

const { v4: UUIDV4 } = require("uuid");

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("RepairStatus", [
			{
				id: "be9e0fb7-1277-45c9-8fd1-3f5b8071f0d3",
				value: "Waiting for repair",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "cce5cad7-403d-4827-8c83-bfe79c1838e4",
				value: "Waiting for parts",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "7983b8b5-472d-4e07-946a-c157face13a6",
				value: "Repair in progress",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "0c3abf0e-a548-445b-8323-e3f580d54a84",
				value: "Done - waiting for pickup",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "e8f93e09-851a-4c24-adda-07867725ca81",
				value: "Done",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "3e487a79-74d2-464c-b695-1d738ac58c48",
				value: "Canceled",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("RepairStatus", null, {});
	},
};
