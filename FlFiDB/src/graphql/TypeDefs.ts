import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # Queries

  type Query {
    customers: [Customer!]!
    customerByName(name: String!): [Customer!]!
    bicycles: [Bicycle!]!
    bicycleColor(id: Int!): BicycleColor!
  }

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
    bicycles: [Bicycle!]! # array vzdy [_!]!
  }

  type Bicycle {
    id: ID!
    type: String
    name: String
    color: BicycleColor!
    brand: BicycleBrands!
    gearsystem: BicycleGearsystem!
    status: BicycleStatus!
    tires: BicycleTires!
    frameNumber: String
    fkOwnerId: String
    fkHolderId: String
    createdAt: String!
    updatedAt: String!
  }

  type BicycleColor {
    id: Int!
    colorName: String!
  }

  type BicycleBrands {
    id: Int!
    name: String!
  }

  type BicycleGearsystem {
    id: Int!
    type: String!
  }

  type BicycleStatus {
    id: Int!
    status: String!
  }

  type BicycleTires {
    id: Int!
    size: String!
  }

  # Mutations
`;
