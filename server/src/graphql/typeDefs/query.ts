export const query = `
  type Query {
    employees: [Employees!]!
    comparePassword(id: Int!, password: String!): CheckedPassword
    customers(customerId: String): [Customer!]!
    customerByName(name: String!): [Customer!]!
    getAccounts: [Account!]!
    bicycles: [Bicycle!]!
    bicycleProps: BicycleProps!
    bicyclesByCustomerId(customerId: String!): [Bicycle!]!
    bicycleInvoiceLines(saleId: String): [BicycleInvoiceLine!]!
    getRepair(id: String!): Repair!
    repairs(customerId: String): [Repair!]!
    repairsToDo: [Repair!]!
    repairsInProgress: [Repair!]!
    repairsDone: [Repair!]!
    tasks: [Task!]!
    taskInvoiceLines(repairId: String): [TaskInvoiceLine!]!
    sales: [Sale!]!
    products: [Product!]!
    productProps: ProductProps!
    productsByCategory(categoryId: Int!): [Product!]!
    productInvoiceLines(saleId: String, repairId: String): [ProductInvoiceLine!]!
    rentals(customerId: String): [Rental!]!
    rentalInvoiceLines: [RentalInvoiceLine!]!
  }
`;
