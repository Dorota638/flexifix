const {
  queryResolvers: customerQueryResolvers,
  resolvers: customerResolvers,
} = require('./customers');
const {
  queryResolvers: bicycleQueryResolvers,
  resolvers: bicycleResolvers,
} = require('./bicycles');
// const { queryResolvers: colorQueryResolvers } = require('./colors');

export const resolvers = {
  Query: {
    ...customerQueryResolvers,
    ...bicycleQueryResolvers,
    // ...colorQueryResolvers,
  },
  Bicycle: bicycleResolvers,
  Customer: customerResolvers,

  // Mutation: {},
  // Subscription: {},
};
