const BicycleColor = require('../../models/BicycleColor');

const errHandler = (err) => {
  console.error('Error: ', err);
};

export const queryResolvers = {
  async color(parent: any, args: { id: string }) {
    try {
      const color = await BicycleColor.findAll({
        where: { id: args.id },
      }).catch(errHandler);
      return color
    } catch (err) {
      throw new Error(err);
    }
  },
};
