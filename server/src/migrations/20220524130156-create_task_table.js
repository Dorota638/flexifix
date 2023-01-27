"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		queryInterface.createTable("Tasks", {
			id: {
				type: Sequelize.STRING(36),
				allowNull: false,
				autoIncrement: false,
				primaryKey: true,
			},
			name: { type: Sequelize.STRING(25), allowNull: false },
			fkTaskCategory: { type: Sequelize.STRING(36), allowNull: false },
			fkProductCategoryId: { type: Sequelize.STRING(36), allowNull: true },
			duration: { type: Sequelize.SMALLINT, allowNull: false },
			createdAt: { type: Sequelize.DATE() },
			updatedAt: { type: Sequelize.DATE() },
		});
	},

	async down(queryInterface, Sequelize) {
		queryInterface.dropTable("Tasks");
	},
};
