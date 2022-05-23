const Customer = require('../../models/Customer');
const Bicycle = require('../../models/Bicycle');

Customer.hasMany(Bicycle, { as: 'Bicycles', foreignKey: 'fkOwnerId' });

const errHandler = (err) => {
  console.error('Error: ', err);
};

export const queryResolvers = {
  async customerByName(_: any, args: { name: string }) {
    try {
      const customers = await Customer.findAll({
        include: [{ model: Bicycle, as: 'Bicycles' }],
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
        include: [{ model: Bicycle, as: 'Bicycles' }],
      }).catch(errHandler);
      return customers;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {
  bicycles: async (parent:any) => {
    try {
      const bicycles = await Bicycle.findAll({
        where: { fkOwnerId: parent.id },
      }).catch(errHandler);
      console.log("bicycles", bicycles);
      return bicycles;
    } catch (err) {
      throw new Error(err);
    }
  },
};

