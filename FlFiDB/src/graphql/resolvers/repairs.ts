import { errHandler } from '../../helper';
const Repair = require('../../models/Repair');
const PaymentMethod = require('../../models/PaymentMethod');
const Account = require('../../models/Account');
const Bicycle = require('../../models/Bicycle');
const Customer = require('../../models/Customer');
const Employee = require('../../models/Employee');

Repair.belongsTo(PaymentMethod, { as: 'PaymentMethod', foreignKey: 'fkPaymentMethod', });
Repair.belongsTo(Account, { as: 'Account', foreignKey: 'fkAccount' });
Repair.belongsTo(Bicycle, { as: 'Bicycle', foreignKey: 'fkBicycleId' });
Repair.belongsTo(Customer, { as: 'Customer', foreignKey: 'fkCustomerId' });
Repair.belongsTo(Employee, { as: 'TakenBy', foreignKey: 'fkTakenBy' });
Repair.belongsTo(Employee, { as: 'Technician', foreignKey: 'fkTechnicianId' });

export const queryResolvers = {
  async repairs() {
    try {
      const repairs = await Repair.findAll({
        include: [
          { model: PaymentMethod, as: 'PaymentMethod' },
          { model: Account, as: 'Account' },
          { model: Bicycle, as: 'Bicycle' },
          { model: Customer, as: 'Customer' },
          { model: Employee, as: 'TakenBy' },
          { model: Employee, as: 'Technician' },
        ],
      }).catch(errHandler);
      return repairs;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {
  paymentMethod: async (parent: any, args: any, context: any) => {
    try {
      const method = await PaymentMethod.findByPk(parent.fkPaymentMethod)
      .catch(errHandler);
      console.log('method', method);
      console.log('parent.fkPaymentMethod', parent.fkPaymentMethod);
      return method;
    } catch (err) {
      throw new Error(err);
    }
  },
};
