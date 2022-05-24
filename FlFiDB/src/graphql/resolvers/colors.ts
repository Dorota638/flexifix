import { errHandler } from "../../helper";
const BicycleColor = require('../../models/BicycleColor');

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
