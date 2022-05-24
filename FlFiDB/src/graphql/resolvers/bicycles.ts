import { errHandler } from '../../helper';
const Customer = require('../../models/Customer');
const Bicycle = require('../../models/Bicycle');
const BicycleColor = require('../../models/BicycleColor');

Bicycle.belongsTo(Customer, { as: 'owner', foreignKey: 'fkOwnerId' });
Bicycle.belongsTo(Customer, { as: 'holder', foreignKey: 'fkHolderId' });
BicycleColor.hasMany(Bicycle, { foreignKey: 'colorId' });

export const queryResolvers = {
  async bicycles() {
    try {
      const bicycles = await Bicycle.findAll({
        include: [
          { model: Customer, as: 'owner' },
          { model: Customer, as: 'holder' },
          { model: BicycleColor },
        ],
      }).catch(errHandler);
      return bicycles;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {
  async color(parent: any) {
    try {
      const color = await BicycleColor.findAll({
        where: { id: parent.colorId },
      }).catch(console.error);
      console.log('color', color[0]);
      return color[0];
    } catch (err) {
      throw new Error(err);
    }
  },
};
