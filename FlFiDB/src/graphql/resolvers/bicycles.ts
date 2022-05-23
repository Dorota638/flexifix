const Customer = require('../../models/Customer');
const Bicycle = require('../../models/Bicycle');

Bicycle.belongsTo(Customer, { as: 'owner', foreignKey: 'fkOwnerId' });
Bicycle.belongsTo(Customer, { as: 'holder', foreignKey: 'fkHolderId' });

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
        ],
      }).catch(errHandler);
      return bicycles;
    } catch (err) {
      throw new Error(err);
    }
  },
};
