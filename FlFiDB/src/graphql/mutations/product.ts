import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const Product = require('../../models/Product');

export const queryMutations = {
  createProduct: async (_: any, { input }: any) => {
    try {
      console.log('args', input);
      const product = await Product.create({ id: UUIDV4(), ...input }).catch(
        errHandler
      );
      return product;
    } catch (err) {
      throw new Error(err);
    }
  },
};
