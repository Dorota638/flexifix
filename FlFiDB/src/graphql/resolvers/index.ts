const {
  queryResolvers: customerQueryResolvers,
  resolvers: customerResolvers,
} = require('./customers');
const {
  queryResolvers: bicycleQueryResolvers,
  resolvers: bicycleResolvers,
} = require('./bicycles');

export const resolvers = {
  Query: {
    ...customerQueryResolvers,
    ...bicycleQueryResolvers,
  },
  Bicycle: bicycleResolvers,
  Customer: customerResolvers,

  // Mutation: {},
  // Subscription: {},
};
