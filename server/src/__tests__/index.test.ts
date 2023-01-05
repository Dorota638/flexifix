// const typeDefs = gql`

//   type Query {
//     bicyclesByCustomerId(customerId: String!): [Bicycle!]!
//   }

//   type Bicycle {
//     id: ID!
//     type: String
//     name: String
//     color: BicycleColor!
//     brand: BicycleBrands!
//     gearsystem: BicycleGearsystem!
//     status: BicycleStatus!
//     tires: BicycleTires!
//     frameNumber: String
//     owner: Customer!
//     holder: Customer!
//     createdAt: String!
//     updatedAt: String!
//   }
// `;

// const resolvers = {
//   Query: {
//     bicyclesByCustomerId: (_, data ) => `${data}!`,
//   },
// };

// it('returns hello with the provided name', async () => {
//   const testServer = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });

//   const result = await testServer.executeOperation({
//     query: 'query bicyclesByCustomerId($customerId: String!): [Bicycle!]!',

//     variables: { customerId: 'c6389cef-b019-4b77-b0f7-44f68aebf155' },
//   });

//   // expect(result.errors).toBeUndefined();

//   // expect(result.data?.hello).toBe('Hello world!');
// });
