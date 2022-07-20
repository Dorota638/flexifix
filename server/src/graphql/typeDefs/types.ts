export const types = `

  type Employees {
    id: Int!
    name: String!
  } 

  type Customer {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    company: String
    cvr: String
    phone: String
    address: String
    zipCode: String
    city: String
    email: String
    idInfo: String
    createdAt: String!
    updatedAt: String!
    bicycles: [Bicycle!]!
  }

  type Bicycle {
    id: ID!
    type: String
    name: String
    color: BicycleColor!
    brand: BicycleBrands!
    gearsystem: BicycleGearsystem!
    status: BicycleStatus!
    tires: BicycleTires!
    frameNumber: String
    owner: Customer!
    holder: Customer!
    createdAt: String!
    updatedAt: String!
  }

  type Repair {
    id: ID!
    number: String
    paymentMethod: PaymentMethod
    bicycle: Bicycle!
    customer: Customer!
    status: RepairStatus!
    takenBy: Employee!
    technician: Employee
    taskInvoiceLines: [TaskInvoiceLine!]!
    dateStarted: String
    dateFinished: String
    dateReturned: String
    spareBicycle: Bicycle
    comment: String
    createdAt: String!
    updatedAt: String!
  }

  type Product {
    id: String
    productSupplier: ProductSupplier
    productBrand: ProductBrand!
    productCategory: ProductCategory!
    productGroup: ProductGroup!
    description: String
    ean: String
    stock: Int
    minStock: Int
    buyPrice: Float!
    sellPrice: Float!
    expectedDurability: Int
  }

  type Rental {
    id: ID!
    number: String
    paymentMethod: PaymentMethod!
    salesPerson: Employee!
    customer: Customer
    rentalInvoiceLines: [RentalInvoiceLine!]!
    periodStart: String!
    periodEnd: String!
    deposit: Int!
    wireLock: Boolean!
    returned: Boolean
    workHours: Float
    active: Boolean
  }

  type Invoice {
    pdf: String!
  }
  
  # ----------------------------------

  type CheckedPassword {
    error: String
    employee: Employee
  }

  type ProductSupplier {
    id: Int!
    name: String!
    minOrder: Int
  }
  type ProductBrand {
    id: Int!
    name: String!
  }
  type ProductCategory {
    id: Int!
    name: String!
  }
  type ProductGroup {
    id: Int!
    name: String!
  }

  type TaskInvoiceLine {
    id: ID!
    task: Task!
    fkRepairId: String!
    amount: Int!
    time: Float!
    price: Float!
  }

  type BicycleInvoiceLine {
    id: ID!
    sale: Sale!
    bicycle: Bicycle!
    price: Float!
  }

  type ProductInvoiceLine {
    id: ID!
    sale: Sale
    repair: Repair
    product: Product!
    amount: Int!
    price: Float!
  }

  type RentalInvoiceLine {
    id: ID!
    fkRentalId: String!
    bicycle: Bicycle!
  }

  type Task {
    id: Int!
    name: String!
    taskCategory: TaskCategory!
    duration: Float!
  }

  type TaskCategory {
    id: Int!
    name: String!
  }

  type BicycleColor {
    id: Int!
    color: String!
  }

  type BicycleBrands {
    id: Int!
    name: String!
  }

  type BicycleGearsystem {
    id: Int!
    type: String!
  }

  type BicycleStatus {
    id: Int!
    status: String!
  }

  type BicycleTires {
    id: Int!
    size: String!
  }

  type RepairStatus {
    id: Int!
    status: String!
  }

  type BicycleProps {
    color: [BicycleColor!]!
    brand: [BicycleBrands!]!
    gearsystem: [BicycleGearsystem!]!
    status: [BicycleStatus!]!
    tires: [BicycleTires!]!
  }

  type ProductProps {
    brand: [ProductBrand!]!
    category: [ProductCategory!]!
    group: [ProductGroup!]!
    supplier: [ProductSupplier!]!
  }

  type Sale {
    id: ID!
    number: String!
    paymentMethod: PaymentMethod!
    customer: Customer
    salesperson: Employee!
    bicycleInvoiceLines: [BicycleInvoiceLine!]!
    productInvoiceLines: [ProductInvoiceLine!]!
  }

  type RepairInvoice {
    id: ID!
    number: String!
    paymentMethod: PaymentMethod!
    bicycle: Bicycle!
    customer: Customer!
    status: RepairStatus!
    takenBy: Employee!
    technician: Employee!
    dateStarted: String
    dateFinished: String
    spareBicycle: Bicycle
    comment: String
    productInvoiceLine: [ProductInvoiceLine!]!
    price: Float!
  }

  type PaymentMethod {
    id: Int!
    method: String!
  }

  type Account {
    id: Int!
    name: String!
    total: Int!
  }

  type Employee {
    id: Int!
    name: String!
    role: Int
  }
  type Password {
    employeeId: Int!
    password: String!
  }
`;
