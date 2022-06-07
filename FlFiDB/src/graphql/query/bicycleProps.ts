import { errHandler } from '../../helper';

const BicycleBrand = require('../../models/BicycleBrand');
const BicycleColor = require('../../models/BicycleColor');
const BicycleGearsystem = require('../../models/BicycleGearsystem');
const BicycleStatus = require('../../models/BicycleStatus');
const BicycleTires = require('../../models/BicycleTires');

export const queryResolvers = {
  async bicycleProps() {
    try {
      const brand = await BicycleBrand.findAll({}).catch(errHandler);
      const color = await BicycleColor.findAll({}).catch(errHandler);
      const gearsystem = await BicycleGearsystem.findAll({}).catch(errHandler);
      const status = await BicycleStatus.findAll({}).catch(errHandler);
      const tires = await BicycleTires.findAll({}).catch(errHandler);
      const props = {
        brand,
        color,
        gearsystem,
        status,
        tires,
      };
      return props;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {
  // productSupplier: async (parent: any) => {
  //   try {
  //     const supplier = await ProductSupplier.findByPk(parent.fkSupplier).catch(
  //       errHandler
  //     );
  //     return supplier;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
};
