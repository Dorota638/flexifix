const {
  queryResolvers: customerQueryResolvers,
  resolvers: customerResolvers,
} = require('./customers');
const {
  queryResolvers: bicycleQueryResolvers,
  resolvers: bicycleResolvers,
} = require('./bicycles');

const {
  queryResolvers: repairQueryResolvers,
  resolvers: repairResolvers,
} = require('./repairs');

export const resolvers = {
  Query: {
    ...customerQueryResolvers,
    ...bicycleQueryResolvers,
    ...repairQueryResolvers,
  },
  Bicycle: bicycleResolvers,
  Customer: customerResolvers,
  Repair: repairResolvers

  // Mutation: {},
  // Subscription: {},
};
