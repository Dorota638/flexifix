import { errHandler } from '../../helper';

const {
  BicycleBrand,
  BicycleColor,
  BicycleGearsystem,
  BicycleStatus,
  BicycleTires,
} = require('../../models/Bicycle');

export const queryResolvers = {
  async bicycleProps() {
    try {
      const brand = await BicycleBrand.findAll().catch(errHandler);
      const color = await BicycleColor.findAll().catch(errHandler);
      const gearsystem = await BicycleGearsystem.findAll().catch(errHandler);
      const status = await BicycleStatus.findAll().catch(errHandler);
      const tires = await BicycleTires.findAll().catch(errHandler);
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
