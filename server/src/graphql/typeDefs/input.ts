export const input = `
  input createCustomerInput {
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
  }

  input editCustomerInput {
    id: ID!
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

  input editBicycleInput{
    id: ID!
    type: String
    name: String
    color: Int
    brand: Int
    gearsystem: Int
    status: Int
    tires: Int
    frameNumber: String
    fkOwnerId: String
    fkHolderId: String
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
    fkPaymentMethod: Int
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
  input editRepairInput {
    id: ID
    fkPaymentMethod: Int
    status: Int
    fkTechnicianId: Int
    dateStarted: Int
    dateFinished: Int
    dateReturned: Int
    fkSpareBicycleId: String
    comment: String
  }

  
  input productInput {
    id: ID
    fkSupplier: Int
    fkBrand: Int
    fkCategory: Int
    fkGroup: Int
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
    employeeId: Int!
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
    fkSalespersonId: Int!
  }
  input productInvoiceLineInput{
    fkSaleId: String
    fkRepairId: String
    fkProductId: String!
    amount: Int!
    price: Float!
  }
  input rentalInput{
    fkSalesPersonId: Int!
    fkCustomerId: String!
    periodStart: String!
    periodEnd: String!
    fkPaymentMethod: Int!
    deposit: Int!
    wireLock: Boolean!
    depositId: Boolean
    returned: String
    workHours: Float
    active: Boolean!
  }
  input rentalInvoiceLineInput{
    fkRentalId: String!
    fkBicycleId: String!
  }
  input taskInput{
    name: String!
    fkTaskCategory: Int!
    duration: Int!
  }
  input taskCategoryInput{
    name: String!
  }

  input invoiceInput{
    id: String!
  }
`;
