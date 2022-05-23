const {
  queryResolvers: customerQueryResolvers,
  resolvers: customerResolvers,
} = require('./customers');
const { queryResolvers: bicycleQueryResolvers } = require('./bicycles');

export const resolvers = {
  Query: {
    ...customerQueryResolvers,
    ...bicycleQueryResolvers,
  },
  Customer: customerResolvers,
  // Mutation: {},
  // Subscription: {},
};
