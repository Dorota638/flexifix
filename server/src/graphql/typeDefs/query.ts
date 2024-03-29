export const query = `
  type Query {
    employees: [Employee!]!
    comparePassword(name: String!, password: String!): CheckedPassword
    customers(customerId: String): [Customer!]!
    customerByName(name: String!): [Customer!]!
    getAccounts: [Account!]!
    bicycles: [Bicycle!]!
    bicycleProps: BicycleProps!
    bicyclesByCustomerId(customerId: String!): [Bicycle!]!
    rentalBicycles: [Bicycle!]!
    bicycleInvoiceLines(saleId: String): [BicycleInvoiceLine!]!
    getRepair(id: String!): Repair!
    repairs(customerId: String): [Repair!]!
    repairsToDo: [Repair!]!
    repairsInProgress: [Repair!]!
    repairsDone: [Repair!]!
    repairStatuses: [RepairStatus!]!
    taskProps: TaskProps!
    tasks: [Task!]!
    taskByName(name: String!): [Task!]!
    taskByCategory(categoryId: String!): [Task!]!
    taskCategory: [TaskCategory!]!
    taskInvoiceLines(repairId: String): [TaskInvoiceLine!]!
    products: [Product!]!
    productProps: ProductProps!
    productsByCategory(categoryId: String!): [Product!]!
    productsByName(name: String!): [Product!]!
    productInvoiceLines(saleId: String, repairId: String): [ProductInvoiceLine!]!
    sales: [Sale!]!
    rentals(customerId: String): [Rental!]!
    rentalInvoiceLines: [RentalInvoiceLine!]!
    sendEmail(email: String!, name: String!, message: String!, time: String!): String
  }
`;
