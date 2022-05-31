import { errHandler } from '../../helper';
const Customer = require('../../models/Customer');
const Bicycle = require('../../models/Bicycle');

// Customer.hasMany(Bicycle, { as: 'Bicycles', foreignKey: 'fkOwnerId' });

export const queryResolvers = {
  async customerByName(parent: any, args: { name: string }, context: any) {
    try {
      const customers = await Customer.findAll({
        where: { firstName: args.name },
      }).catch(errHandler);
      return customers;
    } catch (err) {
      throw new Error(err);
    }
  },

  async customers() {
    try {
      const customers = await Customer.findAll({
      }).catch(errHandler);
      return customers;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {
  bicycles: async (parent: any, args: any, context: any) => {
    try {
      const bicycles = await Bicycle.findAll({
        where: { fkOwnerId: parent.id },
      }).catch(errHandler);
      return bicycles;
    } catch (err) {
      throw new Error(err);
    }
  },
};
