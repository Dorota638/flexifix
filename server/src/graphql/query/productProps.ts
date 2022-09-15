import { errHandler } from '../../helper';

const {
  ProductBrand,
  ProductCategory,
  ProductGroup,
  ProductSupplier
} = require('../../models/Product');

export const queryResolvers = {
  async productProps() {
    try {
      const brand = await ProductBrand.findAll().catch(errHandler);
      const category = await ProductCategory.findAll().catch(errHandler);
      const group = await ProductGroup.findAll().catch(errHandler);
      const supplier = await ProductSupplier.findAll().catch(errHandler);
      
      const props = {
        brand,
        category,
        group,
        supplier
      };
      return props;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {};
