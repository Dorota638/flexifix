module.exports = async () => {
  const Bicycle = require('./models/Bicycle');
  const Customer = require('./models/Customer');

  Customer.hasMany(Bicycle, { as: 'Bicycles', foreignKey: 'fkOwnerId' });
  Bicycle.belongsTo(Customer, { as: 'owner', foreignKey: 'fkOwnerId' });
  Bicycle.belongsTo(Customer, { as: 'holder', foreignKey: 'fkHolderId' });

  const errHandler = (err) => {
    console.error('Error: ', err);
  };

  // const customer = await Customer.create({
  //   id: 'ecec5c91-09ae-4fb3-ab34-c7996389313f',
  //   firstName: 'Flexi',
  //   lastName: 'Fix',
  // }).catch(errHandler);

  // const bicycle = await Bicycle.create({
  //   id: '99f3200e-97ec-460c-8ae9-c26a3fe45445',
  //   name: 'ZumZum',
  //   type: 1,
  //   fkOwnerId: customer.id,
  //   fkHolderId: customer.id,
  // }).catch(errHandler);

  // const customers = await Customer.findAll({
  //   include: [{ model: Bicycle, as: 'Bicycles' }],
  // }).catch(errHandler);

  const bicycles = await Bicycle.findAll({
    include: [
      { model: Customer, as: 'owner' },
      { model: Customer, as: 'holder' },
    ],
  }).catch(errHandler);

  // console.log('customers:', customers);
  console.log('bicycles:', bicycles[0]);
};
