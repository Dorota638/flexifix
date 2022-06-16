import { errHandler } from '../../helper';

const {
  ProductBrand,
  ProductCategory,
  ProductGroup,
} = require('../../models/Product');

export const queryResolvers = {
  async productProps() {
    try {
      const brand = await ProductBrand.findAll().catch(errHandler);
      const category = await ProductCategory.findAll().catch(errHandler);
      const group = await ProductGroup.findAll().catch(errHandler);
      const props = {
        brand,
        category,
        group,
      };
      return props;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {
  // productSupplier: async (parent: any) => {
  //   try {
  //     const supplier = await ProductSupplier.findByPk(parent.fkSupplier).catch(
  //       errHandler
  //     );
  //     return supplier;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
};
