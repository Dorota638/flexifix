export const mutation = `
  type Mutation {
    createRepair(input: createRepairInput): Repair!
    createCustomer(input: createCustomerInput): Customer!
    createBicycle(input: createBicycleInput): Bicycle!
    createTaskInvoiceLine(input: createTaskInvoiceLineInput): TaskInvoiceLine!
    createProduct(input: createProductInput): Product!
    addToAccount(input: accountInput): [Account!]!
    createHashedPassword(input: passwordInput): Password!
  }
`;
