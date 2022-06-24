
export const query = `
  type Query {
    employees: [Employees!]!
    comparePassword(id: Int!, password: String!): CheckedPassword
    customers: [Customer!]!
    customerByName(name: String!): [Customer!]!
    getAccounts: [Account!]!
    bicycles: [Bicycle!]!
    bicycleProps: BicycleProps!
    bicyclesByCustomerId(customerId: String!): [Bicycle!]!
    bicycleInvoiceLines(saleId: String): [BicycleInvoiceLine!]!
    repairs(customerId: String): [Repair!]!
    tasks: [Task!]!
    taskInvoiceLines: [TaskInvoiceLine!]!
    sales: [Sale!]!
    products: [Product!]!
    productProps: ProductProps!
    productsByCategory(categoryId: Int!): [Product!]!
    productInvoiceLines(saleId: String): [ProductInvoiceLine!]!
    rentals(customerId: String): [Rental!]!
    rentalInvoiceLines: [RentalInvoiceLine!]!
  }
`;
