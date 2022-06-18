import { Op } from 'sequelize';
import { errHandler } from '../../helper';
const { Customer } = require('../../models/Customer');
const { Bicycle } = require('../../models/Bicycle');

export const queryResolvers = {
  async customerByName(_: any, args: { name: string }) {
    try {
      const split = args.name.split(' ');
      const customers = await Customer.findAll({
        where: {
          [Op.and]: {
            firstName: {
              [Op.startsWith]: split[0],
            },
            lastName: {
              [Op.startsWith]: split[1],
            },
          },
        },
      }).catch(errHandler);
      return customers;
    } catch (err) {
      throw new Error(err);
    }
  },
  async customers() {
    try {
      const customers = await Customer.findAll().catch(errHandler);
      return customers;
    } catch (err) {
      throw new Error(err);
    }
  },
};
export const resolvers = {
  bicycles: async (parent: any) => {
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
