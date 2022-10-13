import { errHandler } from '../../helper';
import { v4 as UUIDV4 } from 'uuid';
const { Product } = require('../../models/Product');

export const queryMutations = {
  createEditProduct: async (_: any, { input }: any) => {
    try {
      if (input.id) {
        const product = await Product.findByPk(input.id).catch(errHandler);
        product.set({
          ...input,
        });
        await product.save();
        return product;
      } else {
        const product = await Product.create({
          id: UUIDV4(),
          ...input,
        }).catch(errHandler);
        return product;
      }
    } catch (err) {
      throw new Error(err);
    }
  },
};
