const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { typeDefs } = require('./graphql/TypeDefs');
const { resolvers } = require('./graphql/resolvers');
const sequelize = require('./database/connection');
const app = express();

const PORT = process.env.port || 3000;
const main = async () => {
  require('./database/connection');
  // require('./bootstrap')();
  sequelize
    .authenticate()
    .then(() => {
      console.log('connection successful');
    })
    .catch((err) => {
      console.error(err);
    });

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
});

// const main = async () => {
//   await AppDataSource.initialize()
//     .then(() => {
//       console.log('Data Source has been initialized!');
//     })
//     .catch((err) => {
//       console.error('Error during Data Source initialization', err);
//     });

//   const app = express();
//   // app.use(cors());
//   app.use(express.json);

//   app.use(
//     '/graphql',
//     graphqlHTTP({
//       schema,
//       graphiql: true,
//     })
//   );

//   app.get('/', async (req, res) => {
//     res.send('haya houa');
//   });

//   app.listen(3001, () => {
//     console.log('Listening on port 3001');
//   });
// };

// main().catch((err) => {
//   console.log(err);
// });

// const getOwner = ({ id }) => {
//   return new Promise((resolve, reject) => {
//     let sql = `SELECT id, firstName, lastName FROM customer
//     WHERE customer.id = ?`;
//     sql = mysql.format(sql, [id]);
//     db.query(sql, (err, results) => {
//       if (err) reject(err);
//       resolve(results);
//     });
//   });
// };

// const getBicycle = ({ id }) => {
//   return new Promise((resolve, reject) => {
//     let sql = `SELECT * FROM bicycle WHERE bicycle.id = ?`;
//     sql = mysql.format(sql, [id]);
//     db.query(sql, (err, results) => {
//       if (err) reject(err);
//       resolve(results);
//     });
//   });
// };

// const BicycleType = new GraphQLObjectType({
//   name: 'bicycle',
//   fields: () => ({
//     id: { type: GraphQLString },
//     fkColor: { type: GraphQLInt },
//     fkStatus: { type: GraphQLInt },
//     fkGearsystem: { type: GraphQLInt },
//     fkTiers: { type: GraphQLInt },
//     fkBrand: { type: GraphQLInt },
//     type: { type: GraphQLString },
//     name: { type: GraphQLString },
//     frameNumber: { type: GraphQLString },
//     fkOwner: { type: GraphQLString },
//     fkHolder: { type: GraphQLString },
//     fleetNr: { type: GraphQLString },
//     owner: {
//       type: CustomerType,
//       resolve: (rootValue, { id }) => {
//         return getOwner({ id }).then((value) => value[0]);
//       },
//     },
//   }),
// });

// const schema = new GraphQLSchema({
//   query: RootQueryType,
//   // mutation: RootMutationType
// });

// app.use('/bicycle', bicycleRoute);

// app.get('/', async (req, res) => {
//   res.send('haya houa');
// });

// const CustomerType = new GraphQLObjectType({
//   name: 'Customer',
//   description: 'Customer fields',
//   fields: () => ({
//     id: { type: GraphQLString },
//     firstName: { type: GraphQLString },
//     lastName: { type: GraphQLString },
//     company: { type: GraphQLString },
//     cvr: { type: GraphQLString },
//     phone: { type: GraphQLString },
//     address: { type: GraphQLString },
//     zipCode: { type: GraphQLString },
//     city: { type: GraphQLString },
//     email: { type: GraphQLString },
//     idInfo: { type: GraphQLString },
//     created: { type: GraphQLString },
//   }),
// });

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     createUser: {
//       type: UserType,
//       args: {
//         id: { type: GraphQLString },
//         firstName: { type: GraphQLString },
//         lastName: { type: GraphQLString },
//         company: { type: GraphQLString },
//         cvr: { type: GraphQLString },
//         phone: { type: GraphQLString },
//         address: { type: GraphQLString },
//         zipCode: { type: GraphQLString },
//         city: { type: GraphQLString },
//         email: { type: GraphQLString },
//         idInfo: { type: GraphQLString },
//         created: { type: GraphQLString },
//       },
//       resolve(parent, args) {
//         db.query`INSERT INTO customer (id, firstName, lastName, zipCode)
//         VALUES
//         (654123, Matko, Kubko, 54627)`;

//         return args;
//       },
//     },
//   },
// });

// const RootQueryType = new GraphQLObjectType({
//   name: 'Query',
//   description: 'Root Query',
//   fields: () => ({
//     customers:{
//       type: new GraphQLList(CustomerType),
//       description: 'List of all customers',
//       resolve:() => db.query(`SELECT * FROM customer`)
//     }
//   })

// });

// const Mutation = 'mutation';

// const schema = new GraphQLSchema({ query: RootQueryType, mutations: Mutation });

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     rootValue: RootQueryType,
//     graphiql: true,
//   })
// );
