import { Sale } from './../../models/Sale';
import { Bicycle } from './../../models/Bicycle';
import { v4 as UUIDV4 } from 'uuid';
import { errHandler } from '../../helper';
const { BicycleInvoiceLine } = require('../../models/InvoiceLines');

export const queryMutations = {
  createBicycleInvoiceLine: async (_: any, { input }: any) => {
    try {
      const bicycleInvoiceLine = await BicycleInvoiceLine.create({ id: UUIDV4(), ...input }).catch(
        errHandler
      );

      await Sale.findByPk(bicycleInvoiceLine.fkSaleId).then(
        async ({ fkCustomerId }: { fkCustomerId: number }) => {
          await Bicycle.update(
            { fkOwnerId: fkCustomerId, fkHolderId: fkCustomerId },
            { where: { id: bicycleInvoiceLine.fkBicycleId } }
          );
        }
      );
      return bicycleInvoiceLine;
    } catch (err) {
      throw new Error(err);
    }
  },
};
