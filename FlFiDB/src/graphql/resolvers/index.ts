const {
  queryResolvers: customerQueryResolvers,
  resolvers: customerResolvers,
} = require('./customers');
const { queryResolvers: bicycleQueryResolvers } = require('./bicycles');
// const { queryResolvers: colorQueryResolvers } = require('./colors');

export const resolvers = {
  Query: {
    ...customerQueryResolvers,
    ...bicycleQueryResolvers,
    // ...colorQueryResolvers,
  },

  Customer: customerResolvers,

  // Mutation: {},
  // Subscription: {},
};
