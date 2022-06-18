import { errHandler } from '../../helper';
const { Customer } = require('../../models/Customer');
const {
  Bicycle,
  BicycleColor,
  BicycleBrand,
  BicycleGearsystem,
  BicycleStatus,
  BicycleTires,
} = require('../../models/Bicycle');

export const queryResolvers = {
  async bicycles() {
    try {
      const bicycles = await Bicycle.findAll().catch(errHandler);
      return bicycles;
    } catch (err) {
      throw new Error(err);
    }
  },

  async bicyclesByCustomerId(_: any, args: { customerId: string }) {
    try {
      const bicycles = await Bicycle.findAll({
        where: { fkOwnerId: args.customerId },
      }).catch(errHandler);
      return bicycles;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const resolvers = {
  owner: async (parent: any) => {
    try {
      const owner = await Customer.findByPk(parent.fkOwnerId).catch(errHandler);
      return owner;
    } catch (err) {
      throw new Error(err);
    }
  },
  holder: async (parent: any) => {
    try {
      const holder = await Customer.findByPk(parent.fkHolderId).catch(
        errHandler
      );
      return holder;
    } catch (err) {
      throw new Error(err);
    }
  },
  async color(parent: any) {
    try {
      const color = await BicycleColor.findByPk(parent.color).catch(
        console.error
      );
      return color;
    } catch (err) {
      throw new Error(err);
    }
  },
  async brand(parent: any) {
    try {
      const brand = await BicycleBrand.findByPk(parent.brand).catch(
        console.error
      );
      return brand;
    } catch (err) {
      throw new Error(err);
    }
  },
  async gearsystem(parent: any) {
    try {
      const gearsystem = await BicycleGearsystem.findByPk(
        parent.gearsystem
      ).catch(console.error);
      return gearsystem;
    } catch (err) {
      throw new Error(err);
    }
  },
  async status(parent: any) {
    try {
      const status = await BicycleStatus.findByPk(parent.status).catch(
        console.error
      );
      return status;
    } catch (err) {
      throw new Error(err);
    }
  },
  async tires(parent: any) {
    try {
      const tires = await BicycleTires.findByPk(parent.tires).catch(
        console.error
      );
      return tires;
    } catch (err) {
      throw new Error(err);
    }
  },
};
