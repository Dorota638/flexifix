import { ApolloServer, gql } from 'apollo-server-express';

const { typeDefs } = require('../graphql/typeDefs');
const { resolvers } = require('..seeds/graphql');


const CREATE_CUSTOMER_MUTATION = gql`
mutation Mutation($input: createCustomerInput) {
  createCustomer(input: $input) {
    id
    fullName
    email
  }
}`

describe('tests', ()=>{
  let server: ApolloServer;
  const typename = "Customer";

  beforeAll(()=>{
    server = new ApolloServer({ typeDefs, resolvers })
  })

})