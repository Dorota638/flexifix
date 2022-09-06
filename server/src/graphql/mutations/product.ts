import { errHandler } from './../../helper';
import { v4 as UUIDV4 } from 'uuid';
const { Product } = require('../../models/Product');

export const queryMutations = {
  findOrCreateProduct: async (_: any, { input }: any) => {
    try {
      const [product, created] = await Product.findOrCreate({
        where: { id: input.id ? input.id : '' },
        defaults: {
          id: UUIDV4(),
          ...input,
        },
      }).catch(errHandler);
      // console.log('created', created);
      // console.log('product', product);

      return product;
    } catch (err) {
      throw new Error(err);
    }
  },
  editProduct: async (_: any, { input }: any) => {
    try {
      const product = await Product.findByPk(input.id).catch(errHandler);
      product.set({
        ...input,
      });
      await product.save();
      return product;
    } catch (err) {
      throw new Error(err);
    }
  },
};
