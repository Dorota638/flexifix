const { errHandler } = require('../../helper');
const { Repair, RepairStatus } = require('../../models/Repair');
const { PaymentMethod } = require('../../models/PaymentMethod');
const { Bicycle } = require('../../models/Bicycle');
const { Customer } = require('../../models/Customer');
const { Employee } = require('../../models/Employee');
const { TaskInvoiceLine } = require('../../models/InvoiceLines');
const { ProductInvoiceLine } = require('../../models/InvoiceLines');

export const queryResolvers = {
  repairs: async (_: any, { customerId }: { customerId: string }) => {
    try {
      if (customerId) {
        const repairs = await Repair.findAll({
          where: { fkCustomerId: customerId },
        }).catch(errHandler);
        return repairs;
      } else {
        const repairs = await Repair.findAll({ order: ['status'] }).catch(errHandler);
        return repairs;
      }
    } catch (err) {
      throw new Error(err);
    }
  },
  repairsToDo: async () => {
    try {
      const repairs = await Repair.findAll({
        where: {
          status: 'be9e0fb7-1277-45c9-8fd1-3f5b8071f0d3',
        },
      }).catch(errHandler);
      return repairs;
    } catch (err) {
      throw new Error(err);
    }
  },
  repairsInProgress: async () => {
    try {
      const repairs = await Repair.findAll({
        where: {
          status: '7983b8b5-472d-4e07-946a-c157face13a6',
        },
      }).catch(errHandler);
      return repairs;
    } catch (err) {
      throw new Error(err);
    }
  },
  repairsDone: async () => {
    try {
      const repairs = await Repair.findAll({
        where: {
          status: '0c3abf0e-a548-445b-8323-e3f580d54a84',
        },
      }).catch(errHandler);
      return repairs;
    } catch (err) {
      throw new Error(err);
    }
  },
  getRepair: async (_: any, { id }: { id: string }) => {
    try {
      const repair = await Repair.findByPk(id).catch(errHandler);
      return repair;
    } catch (err) {
      throw new Error(err);
    }
  },
};
export const resolvers = {
  async taskInvoiceLines(parent: any) {
    try {
      const taskInvoiceLines = await TaskInvoiceLine.findAll({
        where: { fkRepairId: parent.id },
      }).catch(errHandler);
      return taskInvoiceLines;
    } catch (err) {
      throw new Error(err);
    }
  },

  async productInvoiceLines(parent: any) {
    try {
      const productInvoiceLines = await ProductInvoiceLine.findAll({
        where: { fkRepairId: parent.id },
      }).catch(errHandler);
      return productInvoiceLines;
    } catch (err) {
      throw new Error(err);
    }
  },

  paymentMethod: async (parent: any) => {
    try {
      const method = await PaymentMethod.findByPk(parent.fkPaymentMethod).catch(errHandler);
      return method;
    } catch (err) {
      throw new Error(err);
    }
  },

  bicycle: async (parent: any) => {
    try {
      const bicycle = await Bicycle.findByPk(parent.fkBicycleId).catch(errHandler);
      return bicycle;
    } catch (err) {
      throw new Error(err);
    }
  },
  customer: async (parent: any) => {
    try {
      const customer = await Customer.findByPk(parent.fkCustomerId).catch(errHandler);
      return customer;
    } catch (err) {
      throw new Error(err);
    }
  },
  status: async (parent: any) => {
    try {
      console.log('parent.status', parent.status);
      
      const status = await RepairStatus.findByPk(parent.status).catch(errHandler);
      return status;
    } catch (err) {
      throw new Error(err);
    }
  },
  takenBy: async (parent: any) => {
    try {
      const takenBy = await Employee.findByPk(parent.fkTakenBy).catch(errHandler);
      return takenBy;
    } catch (err) {
      throw new Error(err);
    }
  },
  technician: async (parent: any) => {
    try {
      const technician = await Employee.findByPk(parent.fkTechnicianId).catch(errHandler);
      return technician;
    } catch (err) {
      throw new Error(err);
    }
  },
  spareBicycle: async (parent: any) => {
    try {
      const spareBicycle = await Bicycle.findByPk(parent.fkSpareBicycle).catch(errHandler);
      return spareBicycle;
    } catch (err) {
      throw new Error(err);
    }
  },
};
