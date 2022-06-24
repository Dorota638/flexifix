export const mutation = `
  type Mutation {
    createRepair(input: createRepairInput): Repair!
    createCustomer(input: createCustomerInput): Customer!
    editCustomer(input: editCustomerInput): Customer!
    createBicycle(input: createBicycleInput): Bicycle!
    editBicycle(input: editBicycleInput): Bicycle!
    createTaskInvoiceLine(input: createTaskInvoiceLineInput): TaskInvoiceLine!
    findOrCreateProduct(input: productInput): Product!
    addToAccount(input: accountInput): Account!
    changePassword(input: changePasswordInput): String
    comparePassword(id: Int!, password: String!): CheckedPassword
    createBicycleInvoiceLine(input: bicycleInvoiceLineInput): BicycleInvoiceLine!
    createSale(input: saleInput): Sale!
    createProductInvoiceLine(input: productInvoiceLineInput): ProductInvoiceLine!
    createRental(input: rentalInput): Rental!
    createRentalInvoiceLine(input: rentalInvoiceLineInput): RentalInvoiceLine!
    createTask(input: taskInput): Task!
    createTaskCategory(input: taskCategoryInput): TaskCategory!
    createInvoice(input: String): String
  }
  `;