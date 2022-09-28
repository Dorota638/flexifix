export const mutation = `
  type Mutation {
    createRepair(input: createRepairInput): Repair!
    editRepair(input: editRepairInput): Repair!
    createEditCustomer(input: createEditCustomerInput): Customer!
    createBicycle(input: createBicycleInput): Bicycle!
    editBicycle(input: editBicycleInput): Bicycle!
    createTaskInvoiceLine(input: createTaskInvoiceLineInput): TaskInvoiceLine!
    deleteTaskInvoiceLine(id: String!): Deleted!
    createEditProduct(input: productInput): Product!
    addToAccount(input: accountInput): Account!
    changePassword(input: changePasswordInput): String
    comparePassword(id: String!, password: String!): CheckedPassword
    createBicycleInvoiceLine(input: bicycleInvoiceLineInput): BicycleInvoiceLine!
    createSale(input: saleInput): Sale!
    createProductInvoiceLine(input: productInvoiceLineInput): ProductInvoiceLine!
    deleteProductInvoiceLine(id: String!): Deleted!
    createRental(input: rentalInput): Rental!
    returnRental(rentalId: String!): Rental!
    createRentalInvoiceLine(input: rentalInvoiceLineInput): RentalInvoiceLine!
    createTask(input: taskInput): Task!
    createTaskCategory(input: taskCategoryInput): TaskCategory!
    createInvoice(input: invoiceInput): Invoice
  }
  `;