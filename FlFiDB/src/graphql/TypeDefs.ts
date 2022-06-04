import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # ----------------------------------Queries----------------------------------
  type Query {
    customers: [Customer!]!
    customerByName(name: String!): [Customer!]!
    bicycles: [Bicycle!]!
    bicyclesByCustomerId(customerId: String!): [Bicycle!]!
    repairs: [Repair!]!
    repairsByCustomer(customerId: String!): [Repair!]!
    tasks: [Task!]!
    taskInvoiceLines: [TaskInvoiceLine!]!
    products: [Product!]!
    getAccounts: [Account!]!
    comparePassword(employeeId: Int!, password: String!): CheckedPassword
  }

  # ----------------------------------Mutations----------------------------------

  type Mutation {
    createRepair(input: createRepairInput): Repair!
    createCustomer(input: createCustomerInput): Customer!
    createBicycle(input: createBicycleInput): Bicycle!
    createTaskInvoiceLine(input: createTaskInvoiceLineInput): TaskInvoiceLine!
    createProduct(input: createProductInput): Product!
    addToAccount(input: accountInput): [Account!]!
    createHashedPassword(input: passwordInput): Password!
  }
  # ----------------------------------
  input createCustomerInput {
    firstName: String
    lastName: String
    company: String
    cvr: String
    phone: String
    address: String
    zipCode: String
    city: String
    email: String
    idInfo: String
  }

  input createBicycleInput {
    type: String
    name: String
    color: Int!
    brand: Int!
    gearsystem: Int!
    status: Int!
    tires: Int!
    frameNumber: String
    fkOwnerId: String!
    fkHolderId: String!
    fleetNr: String
  }

  input createTaskInvoiceLineInput {
    fkTask: Int!
    fkRepairId: String!
    amount: Int!
    time: Float!
    price: Float!
  }

  input createRepairInput {
    number: String!
    fkPaymentMethod: Int!
    fkAccount: Int!
    fkBicycleId: String!
    fkCustomerId: String!
    status: Int!
    fkTakenBy: Int!
    fkTechnicianId: Int
    dateStarted: Int
    dateFinished: Int
    dateReturned: Int
    fkSpareBicycleId: String
    comment: String
  }
  input createProductInput {
    fkSupplier: Int
    fkBrand: Int!
    fkCategory: Int!
    fkGroup: Int!
    description: String
    ean: String
    stock: Int
    minStock: Int
    buyPrice: Float!
    sellPrice: Float!
    expectedDurability: Int
  }
  input accountInput {
    id: Int!
    amount: Int!
  }
  input passwordInput {
    employeeId: Int!
    password: String!
  }

  # ----------------------------------Types----------------------------------
  type Customer {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
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
    owner: Customer!
    holder: Customer!
    createdAt: String!
    updatedAt: String!
  }

  type Repair {
    id: ID!
    number: String!
    paymentMethod: PaymentMethod
    account: Account
    bicycle: Bicycle!
    customer: Customer!
    status: Int!
    takenBy: Employee!
    technician: Employee
    taskInvoiceLines: [TaskInvoiceLine!]!
    dateStarted: String
    dateFinished: String
    dateReturned: String
    spareBicycle: Bicycle
    comment: String
    createdAt: String!
    updatedAt: String!
  }

  type Product {
    id: ID!
    productSupplier: ProductSupplier
    productBrand: ProductBrand!
    productCategory: ProductCategory!
    productGroup: ProductGroup!
    description: String
    ean: String
    stock: Int
    minStock: Int
    buyPrice: Float!
    sellPrice: Float!
    expectedDurability: Int
  }
  # ----------------------------------

  type CheckedPassword{
    result: Boolean!
  }

  type ProductSupplier {
    id: Int!
    name: String!
    minOrder: Int
  }
  type ProductBrand {
    id: Int!
    name: String!
  }
  type ProductCategory {
    id: Int!
    name: String!
  }
  type ProductGroup {
    id: Int!
    name: String!
  }

  type TaskInvoiceLine {
    id: ID!
    task: Task!
    fkRepairId: String!
    amount: Int!
    time: Float!
    price: Int!
  }

  type Task {
    id: Int!
    name: String!
    taskCategory: TaskCategory!
    duration: Int!
  }

  type TaskCategory {
    id: Int!
    name: String!
  }

  type BicycleColor {
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

  type PaymentMethod {
    id: Int!
    method: String!
  }

  type Account {
    id: Int!
    name: String!
    total: Int!
  }

  type Employee {
    id: Int!
    name: String!
    role: Int
  }
  type Password {
    employeeId: Int!
    password: String!
  }
`;
