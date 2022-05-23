import { Customer } from './../Entities/Customer';
import { GET_ALL_USERS } from './../Schema/Queries/Customer';
import { GraphQLString, GraphQLObjectType, GraphQLID } from 'graphql';
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  # Types
  type Customer {
    id: ID!
    firstName: String!
    lastName: String!
    company: String
    cvr: String
    phone: String
    address: String
    zipCode: String
    city: String
    email: String
    idInfo: String
    createdAt: String!
    updatedAt: String!
  }

  # Queries

  type Query {
    getAllCustomers: [Customer!]!
  }

  # Mutations
`;


module.exports = {typeDefs}

// export const CustomerType = new GraphQLObjectType({
//   name: 'customer',
//   description: 'customer',
//   fields: () => ({
//     id: { type: GraphQLString },
//     // id: { type: GraphQLID },
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
