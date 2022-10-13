const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { typeDefs } = require('./graphql/typeDefs');
const { resolvers } = require('./graphql');
const sequelize = require('./database/connection');
var cors = require('cors');
const app = express();

const PORT = process.env.port || 3000;
const main = async () => {
  require('./database/connection');

  app.use(cors());

  sequelize
    .authenticate()
    .then(() => {
      console.log('sequelize connection successful');
    })
    .catch((err: any) => {
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
