import { gql } from "@apollo/client";

export const GET_TODO = gql`
  query RepairsInProgress {
    repairsInProgress {
      id
      number
      bicycle {
        id
        type
        color {
          value
        }
        brand {
          value
        }
      }
      customer {
        fullName
      }
      status {
        value
        id
      }
      takenBy {
        name
      }
      technician {
        name
      }
      taskInvoiceLines {
        id
        task {
          name
          duration
          id
          taskCategory {
            name
          }
        }
        price
        time
      }
      createdAt
    }
    repairsToDo {
      id
      number
      bicycle {
        id
        type
        color {
          value
        }
        brand {
          value
        }
      }
      customer {
        fullName
      }
      status {
        value
        id
      }
      takenBy {
        name
      }
      technician {
        name
      }
      taskInvoiceLines {
        id
        task {
          name
          duration
          id
          taskCategory {
            name
          }
        }
        price
        time
      }
      createdAt
    }
    repairsDone {
      id
      number
      bicycle {
        id
        type
        color {
          value
        }
        brand {
          value
        }
      }
      customer {
        fullName
      }
      status {
        value
        id
      }
      takenBy {
        name
      }
      technician {
        name
      }
      taskInvoiceLines {
        id
        task {
          name
          duration
          id
          taskCategory {
            name
          }
        }
        price
        time
      }
      createdAt
    }
  }
`;
export const GET_ALL_REPAIRS = gql`
  query {
    repairs {
      id
      number
      paymentMethod {
        id
        method
      }
      bicycle {
        id
        type
        name
        color {
          id
          value
        }
        brand {
          id
          value
        }
        gearsystem {
          id
          value
        }
        status {
          id
          value
        }
        tires {
          id
          value
        }
        frameNumber
        owner {
          id
          fullName
        }
        holder {
          id
          fullName
        }
        createdAt
        updatedAt
      }
      customer {
        id
        fullName
        createdAt
        updatedAt
        bicycles {
          id
          type
          name
          frameNumber
          createdAt
          updatedAt
        }
      }
      status {
        id
        value
      }
      takenBy {
        id
        name
      }
      technician {
        id
        name
      }
      taskInvoiceLines {
        id
        task {
          id
          name
          taskCategory {
            id
            name
          }
          duration
        }
        fkRepairId
        amount
        time
        price
      }
      productInvoiceLines {
        product {
          productBrand {
            name
          }
          productCategory {
            name
          }
          sellPrice
        }
        amount
        price
        id
      }
      dateStarted
      dateFinished
      dateReturned
      spareBicycle {
        id
        type
        name
        frameNumber
        createdAt
        updatedAt
      }
      comment
      createdAt
      updatedAt
    }
  }
`;
export const GET_ALL_REPAIRS_LIST = gql`
  query {
    repairs {
      id
      number
      customer {
        fullName
      }
      bicycle {
        brand {
          name
        }
      }
      status {
        value
        id
      }
      createdAt
    }
  }
`;
export const TAKE_REPAIR = gql`
  mutation ($id: ID, $status: String, $fkTechnicianId: String, $dateStarted: String) {
    editRepair(
      input: {
        id: $id
        status: $status
        fkTechnicianId: $fkTechnicianId
        dateStarted: $dateStarted
      }
    ) {
      id
      technician {
        name
      }
      status {
        id
        value
      }
      dateStarted
    }
  }
`;
export const GET_PRODUCT_INVOICE_LINES = gql`
  query ProductInvoiceLines($repairId: String) {
    productInvoiceLines(repairId: $repairId) {
      id
      amount
      product {
        id
        productBrand {
          value
          id
        }
        productCategory {
          value
          id
        }
        description
        sellPrice
      }
    }
  }
`;
export const DELETE_PRODUCT_INVOICE_LINE = gql`
  mutation ($id: String!) {
    deleteProductInvoiceLine(id: $id) {
      deleted
    }
  }
`;
export const GET_TASK_INVOICE_LINES = gql`
  query taskInvoiceLines($repairId: String) {
    taskInvoiceLines(repairId: $repairId) {
      id
      task {
        id
        name
        taskCategory {
          name
          id
        }
        duration
      }
      fkRepairId
      amount
      time
      price
    }
  }
`;
export const DELETE_TASK_INVOICE_LINE = gql`
  mutation ($id: String!) {
    deleteTaskInvoiceLine(id: $id) {
      deleted
    }
  }
`;
export const GET_BICYCLES = gql`
  query ($customerId: String!) {
    bicyclesByCustomerId(customerId: $customerId) {
      id
      color {
        value
      }
      brand {
        value
      }
      gearsystem{
        value
      }
    }
  }
`;
export const POST_NEW_REPAIR = gql`
  mutation (
    $fkBicycleId: String!
    $fkCustomerId: String!
    $fkTakenBy: String!
    $comment: String
    $status: String!
  ) {
    createRepair(
      input: {
        fkBicycleId: $fkBicycleId
        fkCustomerId: $fkCustomerId
        fkTakenBy: $fkTakenBy
        comment: $comment
        status: $status
      }
    ) {
      id
      bicycle {
        id
      }
      customer {
        id
      }
      takenBy {
        id
      }
      createdAt
      updatedAt
      status {
        id
      }
      number
    }
  }
`;
export const ADD_TASK_INVOICE_LINE = gql`
  mutation (
    $fkTask: String!
    $fkRepairId: String!
    $amount: Int!
    $time: Float!
    $price: Float!
  ) {
    createTaskInvoiceLine(
      input: {
        fkTask: $fkTask
        fkRepairId: $fkRepairId
        amount: $amount
        time: $time
        price: $price
      }
    ) {
      id
      task {
        id
        name
        taskCategory {
          name
          id
        }
        duration
      }
      fkRepairId
      amount
      price
      time
    }
  }
`;
export const ADD_PRODUCT_INVOICE_LINE = gql`
  mutation (
    $fkRepairId: String
    $fkSaleId: String
    $fkProductId: String!
    $amount: Int!
    $price: Float!
  ) {
    createProductInvoiceLine(
      input: {
        fkRepairId: $fkRepairId
        fkSaleId: $fkSaleId
        fkProductId: $fkProductId
        amount: $amount
        price: $price
      }
      ) {
      id
      product {
        id
        productSupplier {
          value
          id
        }
        productBrand {
          id
          value
        }
        productCategory {
          id
          value
        }
        productGroup {
          id
          value
        }
        description
        ean
        sellPrice
      }
      price
    }
  }
`
export const GET_REPAIR = gql`
  query Query($repairId: String) {
    taskInvoiceLines(repairId: $repairId) {
      id
      amount
      price
      time
      task {
        id
        taskCategory {
          id
          name
        }
        name
        duration
      }
    }
  }
`;
export const GET_CUSTOMER = gql`
  query getCustomer($name: String!) {
    customerByName(name: $name) {
      id
      fullName
      email
    }
  }
`;
export const NEW_BICYCLE = gql`
  mutation CreateBicycle(
    $color: String!
    $brand: String!
    $gearsystem: String!
    $status: String!
    $tires: String!
    $fkOwnerId: String!
    $fkHolderId: String!
  ) {
    createBicycle(
      input: {
        color: $color
        brand: $brand
        gearsystem: $gearsystem
        status: $status
        tires: $tires
        fkOwnerId: $fkOwnerId
        fkHolderId: $fkHolderId
      }
    ) {
      color {
        id
        value
      }
      brand {
        id
        value
      }
      gearsystem {
        id
        value
      }
      status {
        id
        value
      }
      tires {
        id
        value
      }
    }
  }
`;
export const EDIT_BICYCLE = gql`
mutation (
  $id: ID!
  $name: String
  $brand: Int
  $type: String
  $color: String
  $gearsystem: String
  $tires: String
  $status: String
  $frameNumber: String
) {
  editBicycle(input: {
    id: $id
    type: $type
    name: $name
    color: $color
    brand: $brand
    gearsystem: $gearsystem
    status: $status
    tires: $tires
    frameNumber: $frameNumber
  }) {
    id
    type
    name
    color {
      id
      value
    }
    brand {
      id
      value
    }
    gearsystem {
      id
      value
    }
    status {
      id
      value
    }
    tires {
      id
      value
    }
    frameNumber
    owner {
      id
      fullName
    }
    holder {
      id
      fullName
    }
  }
}
`
export const EDIT_PRODUCT = gql`
  mutation (
    $id: ID
    $fkSupplier: String
    $fkBrand: String
    $fkGroup: Int
    $fkCategory: String
    $description: String
    $ean: String
    $stock: Int
    $minStock: Int
    $buyPrice: Float
    $sellPrice: Float
    $expectedDurability: Int
  ) {
    editProduct(
      input: {
        id: $id
        fkSupplier: $fkSupplier
        fkBrand: $fkBrand
        fkGroup: $fkGroup
        fkCategory: $fkCategory
        description: $description
        ean: $ean
        stock: $stock
        minStock: $minStock
        buyPrice: $buyPrice
        sellPrice: $sellPrice
        expectedDurability: $expectedDurability
      }
    ) {
      id
      productSupplier {
        value
        id
      }
      productBrand {
        id
        value
      }
      productCategory {
        id
        value
      }
      productGroup {
        id
        value
      }
      description
      ean
      stock
      minStock
      buyPrice
      sellPrice
      expectedDurability
    }
  }
`;
export const NEW_CUSTOMER = gql`
  mutation (
    $id: ID
    $firstName: String!
    $lastName: String!
    $email: String!
    $phone: Int
    $company: String
    $cvr: String
    $address: String
    $zipCode: String
    $city: String
  ) {
    createEditCustomer(
      input: {
        id: $id
        firstName: $firstName
        lastName: $lastName
        email: $email
        phone: $phone
        company: $company
        cvr: $cvr
        address: $address
        zipCode: $zipCode
        city: $city
      }
    ) {
      id
      fullName
      email
      phone
      company
      cvr
      address
      zipCode
      city
    }
  }
`;
export const FINISH_REPAIR = gql`
  mutation ($id: ID, $status: String, $dateFinished: String) {
    editRepair(
      input: { id: $id, status: $status, dateFinished: $dateFinished }
    ) {
      id
      status {
        value
        id
      }
      dateFinished
    }
  }
`;
export const POST_NEW_SALE = gql`
  mutation (
    $fkPaymentMethod: Int!
    $fkCustomerId: String!
    $fkSalespersonId: Int!
  ) {
    createSale(
      input: {
        fkPaymentMethod: $fkPaymentMethod
        fkCustomerId: $fkCustomerId
        fkSalespersonId: $fkSalespersonId
      }
    ) {
      id
    }
  }
`;
export const ADD_BICYCLE_INVOICE_LINE = gql`
  mutation ($fkSaleId: String!, $fkBicycleId: String!, $price: Float!) {
    createBicycleInvoiceLine(
      input: { fkSaleId: $fkSaleId, fkBicycleId: $fkBicycleId, price: $price }
    ) {
      id
      sale {
        id
      }
      bicycle {
        id
      }
      price
    }
  }
`;
export const GET_PRODUCTS = gql`
  query {
    products {
      id
      productBrand {
        value
        id
      }
      productCategory {
        value
        id
      }
      productGroup {
        value
        id
      }
      description
      ean
      stock
      minStock
      buyPrice
      sellPrice
      expectedDurability
    }
  }
`;
export const GET_BICYCLE_PROPS = gql`
  query {
    bicycleProps {
      color {
        id
        value
      }
      tires {
        id
        value
      }
      status {
        id
        value
      }
      gearsystem {
        id
        value
      }
      brand {
        id
        value
      }
    }
  }
`;
export const GET_PRODUCT_PROPS = gql`
  query {
    productProps {
      brand {
        value
        id
      }
      category {
        value
        id
      }
      group {
        value
        id
      }
      supplier {
        minOrder
        value
        id
      }
    }
  }
`;
export const GET_TASK_PROPS = gql`
  query {
    taskProps {
      category {
        name
        id
      }
    }
  }
`;
export const GET_TASKS = gql`
  query {
    tasks {
      taskCategory {
        name
        id
      }
      id
      name
      duration
    }
  }
`;
export const GET_ALL_BICYCLES = gql`
  query {
    bicycles {
      type
      name
      color {
        id
        value
      }
      brand {
        value
        id
      }
      gearsystem {
        value
        id
      }
      status {
        value
        id
      }
      tires {
        value
        id
      }
      frameNumber
      owner {
        id
        fullName
      }
      holder {
        id
        fullName
      }
      id
    }
  }
`;
export const GET_ALL_CUSTOMERS = gql`
  query {
    customers {
      id
      firstName
      lastName
      company
      cvr
      phone
      address
      zipCode
      city
      email
    }
  }
`;
export const GET_ALL_PRODUCTS = gql`
  query {
    products {
      id
      productSupplier {
        value
        id
      }
      productBrand {
        value
        id
      }
      productCategory {
        value
        id
      }
      productGroup {
        value
        id
      }
      description
      ean
      stock
      minStock
      buyPrice
      sellPrice
      expectedDurability
    }
  }
`;
export const LOGIN = gql`
  mutation ($id: Int!, $password: String!) {
    comparePassword(id: $id, password: $password) {
      error
      employee {
        id
        name
        role
      }
    }
  }
`;
export const GET_EMPLOYEES = gql`
  query {
    employees {
      id
      name
    }
  }
`;
export const CHANGE_REPAIR_STATUS = gql`
mutation editRepair($id: String! $status: String!) {
  editRepair(input:{id: $id status: $status}) {
    id
    status {
      id
    value
    }
  }
}
`
export const GET_REPAIR_STATUSES = gql`
query RepairStatuses {
  repairStatuses {
    id
    value
  }
}
`