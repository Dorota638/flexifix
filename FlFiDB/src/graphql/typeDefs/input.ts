export const input = `
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
  input bicycleInvoiceLineInput {
    fkSaleId: String!
    fkBicycleId: String!
    price: Float!
  }
    input saleInput {
    number: String!
    fkPaymentMethod: Int!
    fkAccount: Int!
    fkCustomerId: String
    fkSalespersonId: Int!
  }
  input productInvoiceLineInput{
    fkSaleId: String
    fkRepairId: String
    fkProductId: Int!
    amount: Int!
    price: Float!
  }
  input rentalInput{
    number: String!
    fkSalesPersonId: Int!
    fkCustomerId: String!
    periodStart: String!
    periodEnd: String!
    fkAccount: Int!
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
`;
