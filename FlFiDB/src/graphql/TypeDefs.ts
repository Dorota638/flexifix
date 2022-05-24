import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # Queries

  type Query {
    customers: [Customer!]!
    customerByName(name: String!): [Customer!]!
    bicycles: [Bicycle!]!
    bocycleColor(id: Int!): BicycleColors!
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
    color: BicycleColors!
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

  type BicycleColors {
    id: Int!
    color: String!
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
