export const input = `
  input createEditCustomerInput {
    id: ID
    firstName: String!
    lastName: String!
    company: String
    cvr: String
    phone: Int
    address: String
    zipCode: String
    city: String
    email: String
    idInfo: String
  }

  input createBicycleInput {
    type: String
    name: String
    color: String!
    brand: String!
    gearsystem: String!
    status: String!
    tires: String!
    frameNumber: String
    fkOwnerId: String!
    fkHolderId: String!
    fleetNr: String
  }

  input editBicycleInput{
    id: ID!
    type: String
    name: String
    color: String
    brand: String
    gearsystem: String
    status: String
    tires: String
    frameNumber: String
    fkOwnerId: String
    fkHolderId: String
    fleetNr: String
  }

  input createTaskInvoiceLineInput {
    fkTask: String!
    fkRepairId: String!
    amount: Int!
    time: Float!
    price: Float!
  }

  input createRepairInput {
    fkPaymentMethod: Int
    fkBicycleId: String!
    fkCustomerId: String!
    status: String!
    fkTakenBy: String!
    fkTechnicianId: String
    dateStarted: Int
    dateFinished: Int
    dateReturned: Int
    fkSpareBicycleId: String
    comment: String
  }
  input editRepairInput {
    id: String!
    fkPaymentMethod: Int
    status: String
    fkTechnicianId: String
    dateStarted: String
    dateFinished: String
    dateReturned: String
    fkSpareBicycleId: String
    comment: String
  }

  
  input productInput {
    id: ID
    fkSupplier: String
    fkBrand: String
    fkCategory: String
    fkGroup: String
    description: String
    ean: String
    stock: Int
    minStock: Int
    buyPrice: Float
    sellPrice: Float
    expectedDurability: Int
  }

  input accountInput {
    id: Int!
    amount: Int!
  }
  input passwordInput {
    employeeId: String!
    password: String!
  }
  input changePasswordInput{
    name: String!
    oldPassword: String
    newPassword: String!
  }
  input bicycleInvoiceLineInput {
    fkSaleId: String!
    fkBicycleId: String!
    price: Float!
  }
  input saleInput {
    fkPaymentMethod: Int!
    fkCustomerId: String
    fkSalespersonId: String!
  }
  input productInvoiceLineInput{
    fkSaleId: String
    fkRepairId: String
    fkProductId: String!
    amount: Int!
    price: Float!
  }
  input rentalInput{
    fkSalesPersonId: String!
    fkCustomerId: String!
    fkBicycleId: String
    periodStart: String!
    periodEnd: String!
    fkPaymentMethod: Int
    deposit: Int
    wireLock: Boolean
    depositId: Boolean
    returned: String
    workHours: Float
    active: Boolean
  }
  input rentalInvoiceLineInput{
    fkRentalId: String!
    fkBicycleId: String!
  }
  input taskInput{
    name: String!
    fkTaskCategory: String!
    fkProductCategoryId: String
    duration: Int!
  }
  input taskCategoryInput{
    name: String!
  }
  input invoiceInput{
    id: String!
  }
`;
