const Customer = require('../../models/Customer');
const Bicycle = require('../../models/Bicycle');
const BicycleColor = require('../../models/BicycleColor');

Bicycle.belongsTo(Customer, { as: 'owner', foreignKey: 'fkOwnerId' });
Bicycle.belongsTo(Customer, { as: 'holder', foreignKey: 'fkHolderId' });
Bicycle.hasOne(BicycleColor, { as: 'bicycleColor', foreignKey: 'color' });

const errHandler = (err) => {
  console.error('Error: ', err);
};

export const queryResolvers = {
  async bicycles() {
    try {
      const bicycles = await Bicycle.findAll({
        include: [
          { model: Customer, as: 'owner' },
          { model: Customer, as: 'holder' },
          { model: BicycleColor, as: 'bicycleColor' },
        ],
      }).catch(errHandler);
      return bicycles;
    } catch (err) {
      throw new Error(err);
    }
  },
  
  // async color(parent: any, args: { id: string }){
  //   try {
  //     const color = await
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },
};
