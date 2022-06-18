
export const query = `
  type Query {
    customers: [Customer!]!
    customerByName(name: String!): [Customer!]!
    bicycles: [Bicycle!]!
    bicyclesByCustomerId(customerId: String!): [Bicycle!]!
    repairs(customerId: String): [Repair!]!
    tasks: [Task!]!
    taskInvoiceLines: [TaskInvoiceLine!]!
    bicycleInvoiceLines(saleId: String): [BicycleInvoiceLine!]!
    products: [Product!]!
    productsByCategory(categoryId: Int!): [Product!]!
    productInvoiceLines(saleId: String): [ProductInvoiceLine!]!
    getAccounts: [Account!]!
    comparePassword(employeeId: Int!, password: String!): CheckedPassword
    bicycleProps: BicycleProps!
    productProps: ProductProps!
    sales: [Sale!]!
    repairInvoice: RepairInvoice!
    rentals(customerId: String): [Rental!]!
    rentalInvoiceLines: [RentalInvoiceLine!]!
  }
`;
