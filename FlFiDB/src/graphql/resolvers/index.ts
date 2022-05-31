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

const {
  queryResolvers: taskQueryResolvers,
  resolvers: taskResolvers,
} = require('./task');

export const resolvers = {
  Query: {
    ...customerQueryResolvers,
    ...bicycleQueryResolvers,
    ...repairQueryResolvers,
    ...taskQueryResolvers,
  },
  Bicycle: bicycleResolvers,
  Customer: customerResolvers,
  Repair: repairResolvers,
  Task: taskResolvers,

  // Mutation: {},
  // Subscription: {},
};
