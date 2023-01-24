import { Op, Sequelize } from "sequelize";
import { errHandler } from "../../helper";
const {
	Product,
	ProductSupplier,
	ProductBrand,
	ProductCategory,
	ProductGroup,
} = require("../../models/Product");

export const queryResolvers = {
	async products() {
		try {
			const products = await Product.findAll().catch(errHandler);
			// console.log(
			//   'products',
			//   products.map((product) => product.dataValues.fkGroup)
			// );

			return products;
		} catch (err) {
			throw new Error(err);
		}
	},
	async productsByCategory(_: any, input: { categoryId: string }) {
		try {
			const products = await Product.findAll({
				where: { fkCategory: input.categoryId },
			}).catch(errHandler);
			return products;
		} catch (err) {
			throw new Error(err);
		}
	},
	async productsByName(_: any, input: { name: string }) {
		try {
			const products = await Product.findAll({
				where: {
					[Op.or]: [
						{ description: { [Op.substring]: input.name } },
						{ ean: { [Op.substring]: input.name } },
						{
							fkBrand: {
								[Op.in]: Sequelize.literal(
									`(SELECT id FROM ProductBrands WHERE value LIKE '%${input.name}%')`
								),
							},
						},
						{
							fkCategory: {
								[Op.in]: Sequelize.literal(
									`(SELECT id FROM ProductCategories WHERE value LIKE '%${input.name}%')`
								),
							},
						},
					],
				},
			}).catch(errHandler);
			return products;
		} catch (err) {
			throw new Error(err);
		}
	},
};

export const resolvers = {
	productSupplier: async (parent: any) => {
		try {
			const supplier = await ProductSupplier.findByPk(parent.fkSupplier).catch(errHandler);
			return supplier;
		} catch (err) {
			throw new Error(err);
		}
	},
	productBrand: async (parent: any) => {
		try {
			const brand = await ProductBrand.findByPk(parent.fkBrand).catch(errHandler);
			return brand;
		} catch (err) {
			throw new Error(err);
		}
	},
	productCategory: async (parent: any) => {
		try {
			const category = await ProductCategory.findByPk(parent.fkCategory).catch(errHandler);
			return category;
		} catch (err) {
			throw new Error(err);
		}
	},
	productGroup: async (parent: any) => {
		try {
			const group = await ProductGroup.findByPk(parent.fkGroup).catch(errHandler);
			return group;
		} catch (err) {
			throw new Error(err);
		}
	},
};
