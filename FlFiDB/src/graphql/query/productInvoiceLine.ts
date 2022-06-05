import { errHandler } from '../../helper';

const ProductInvoiceLine = require('../../models/ProductInvoiceLine');
const Product = require('../../models/Product');
const Sale = require('../../models/Sale');
const Repair = require('../../models/Repair');

export const queryResolvers = {
  async productInvoiceLines(_: any, { saleId }) {
    try {
      if (saleId) {
        const productInvoiceLine = await ProductInvoiceLine.findAll({
          where: { fkSaleId: saleId },
        }).catch(errHandler);
        return productInvoiceLine;
      } else {
        const productInvoiceLine = await ProductInvoiceLine.findAll().catch(
          errHandler
        );
        return productInvoiceLine;
      }
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {
  async product(parent: any) {
    try {
      const product = await Product.findByPk(parent.fkProductId).catch(
        errHandler
      );
      return product;
    } catch (err) {
      throw new Error(err);
    }
  },

  async repair(parent: any) {
    try {
      const sale = await Repair.findByPk(parent.fkRepairId).catch(errHandler);
      return sale;
    } catch (err) {
      throw new Error(err);
    }
  },

  async sale(parent: any) {
    try {
      const sale = await Sale.findByPk(parent.fkSaleId).catch(errHandler);
      return sale;
    } catch (err) {
      throw new Error(err);
    }
  },
};
