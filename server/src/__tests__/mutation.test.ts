import { ApolloServer, gql } from 'apollo-server-express';

const { typeDefs } = require('../graphql/typeDefs');
const { resolvers } = require('..seeds/graphql');

const server

    try{





  
  const CREATE_CUSTOMER_MUTATION = gql`
    mutation ($firstName: String!, $lastName: String!, $email: String!) {
    createCustomer(
      input: { firstName: $firstName, lastName: $lastName, email: $email }
    ){ id fullName email }}
  `;

  const customer = await server.executeOperation({
    query: CREATE_CUSTOMER_MUTATION,
    variables: { firstName: 'Matus', lastName:'Laco', email:'matus.laco@laco.com'},
  });

  expect(customer.errors).toBeUndefined();
  expect(customer.data?.fullName).toBe('Matus Laco');
  expect(customer.data?.email).toBe('matus.laco@laco.com');



  const POST_NEW_SALE = gql`
  mutation ($fkPaymentMethod: Int!, $fkCustomerId: String!, $fkSalespersonId: Int!) {
    createSale(
      input: {
        fkPaymentMethod: $fkPaymentMethod
        fkCustomerId: $fkCustomerId
        fkSalespersonId: $fkSalespersonId
      }
    ){ id }}`;

  const sale = await server.executeOperation({
    query: POST_NEW_SALE,
    variables: {
      fkPaymentMethod: 1,
      fkCustomerId: '0755c42b-1746-49cf-a242-7240c72bcf46',
      fkSalespersonId: 1,
    },
  });

  expect(sale.errors).toBeUndefined();
  expect(sale.data?.fkAccount.name).toBe('Cash');





}