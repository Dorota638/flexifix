import { gql } from 'apollo-server-express';

export const typeDefs = gql`
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
    bicycles: [Bicycle!]!   # array vzdy [_!]!
  }
  type Bicycle {
    id: ID!
    type: String
    name: String
    frameNumber: String
    fkOwnerId: String
    fkHolderId: String
    createdAt: String!
    updatedAt: String!
  }

  # Queries

  type Query {
    customers: [Customer!]!
    customerByName(name:String!): [Customer!]!
    bicycles: [Bicycle!]!
  }

  # Mutations
`;




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
