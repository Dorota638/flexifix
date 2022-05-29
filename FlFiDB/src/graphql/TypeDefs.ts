import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # Queries

  type Query {
    customers: [Customer!]!
    customerByName(name: String!): [Customer!]!
    bicycles: [Bicycle!]!
    repairs: [Repair!]!
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
    id: ID!
    colorName: String!
  }

  type BicycleBrands {
    id: ID!
    name: String!
  }

  type BicycleGearsystem {
    id: ID!
    type: String!
  }

  type BicycleStatus {
    id: ID!
    status: String!
  }

  type BicycleTires {
    id: ID!
    size: String!
  }

  type Repair {
    id: ID!
    number: String!
    fkPaymentMethod: PaymentMethod
    fkAccount: Account
    fkBicycleId: Bicycle!
    fkCustomerId: Customer!
    status: Int!
    fkTakenBy: Employee!
    fkTechnicianId: Employee
    dateStarted: String
    dateFinished: String
    dateReturned: String
    fkSpareBicycleId: Bicycle
    comment: String
    createdAt: String!
    updatedAt: String!
  }

  type PaymentMethod {
    id: ID!
    method: String!
  }
  type Account {
    id: ID!
    name: String!
    total: Int!
  }
  type Employee {
    id: ID!
    name: String!
    role: Int
  }

  # Mutations
`;
