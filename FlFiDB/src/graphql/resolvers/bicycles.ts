import { errHandler } from '../../helper';
const Customer = require('../../models/Customer');
const Bicycle = require('../../models/Bicycle');
const BicycleColor = require('../../models/BicycleColor');
const BicycleBrand = require('../../models/BicycleBrand');
const BicycleGearsystem = require('../../models/BicycleGearsystem');
const BicycleStatus = require('../../models/BicycleStatus');
const BicycleTires = require('../../models/BicycleTires');

Bicycle.belongsTo(Customer, { as: 'owner', foreignKey: 'fkOwnerId' });
Bicycle.belongsTo(Customer, { as: 'holder', foreignKey: 'fkHolderId' });

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

export const resolvers = {
  async color(parent: any) {
    try {
      const color = await BicycleColor.findByPk(parent.color)
      .catch(console.error);
      return color;
    } catch (err) {
      throw new Error(err);
    }
  },
  async brand(parent: any) {
    try {
      const brand = await BicycleBrand.findByPk(parent.brand)
      .catch(console.error);
      return brand;
    } catch (err) {
      throw new Error(err);
    }
  },
  async gearsystem(parent: any) {
    try {
      const gearsystem = await BicycleGearsystem.findByPk(parent.gearsystem)
      .catch(console.error);
      return gearsystem;
    } catch (err) {
      throw new Error(err);
    }
  },
  async status(parent: any) {
    try {
      const status = await BicycleStatus.findByPk(parent.status)
      .catch(console.error);
      console.log('parent.status', parent.status);
      return status;
    } catch (err) {
      throw new Error(err);
    }
  },
  async tires(parent: any) {
    try {
      const tires = await BicycleTires.findByPk(parent.tires)
      .catch(console.error);
      return tires;
    } catch (err) {
      throw new Error(err);
    }
  },

  // async (parent: any) {
  //   try {
  //     const  = await Bicycle.findByPk(parent.)
  //     .catch(console.error);
  //     return ;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // },

};
