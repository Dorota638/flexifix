import { errHandler } from '../../helper';

const { BicycleInvoiceLine } = require('../../models/InvoiceLines');
const { Bicycle } = require('../../models/Bicycle');
const { Sale } = require('../../models/Sale');

export const queryResolvers = {
  async bicycleInvoiceLines(_: any, { saleId }: { saleId: string }) {
    try {
      if (saleId) {
        const bicycleInvoiceLine = await BicycleInvoiceLine.findAll({
          where: { fkSaleId: saleId },
        }).catch(errHandler);
        return bicycleInvoiceLine;
      } else {
        const bicycleInvoiceLine = await BicycleInvoiceLine.findAll().catch(errHandler);
        return bicycleInvoiceLine;
      }
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {
  async bicycle(parent: any) {
    try {
      const bicycle = await Bicycle.findByPk(parent.fkBicycleId).catch(errHandler);
      return bicycle;
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
