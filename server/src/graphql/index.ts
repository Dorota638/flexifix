import { IResolvers } from '@graphql-tools/utils';

const {
  queryResolvers: customerQueryResolvers,
  resolvers: customerResolvers,
} = require('./query/customers');
const {
  queryResolvers: bicycleQueryResolvers,
  resolvers: bicycleResolvers,
} = require('./query/bicycles');
const {
  queryResolvers: repairQueryResolvers,
  resolvers: repairResolvers,
} = require('./query/repairs');
const { queryResolvers: repairPropsQueryResolvers } = require('./query/repairProps');
const { queryResolvers: taskQueryResolvers, resolvers: taskResolvers } = require('./query/tasks');
const {
  queryResolvers: taskInvoiceLineQueryResolvers,
  resolvers: taskInvoiceLineResolvers,
} = require('./query/taskInvoiceLines');
const {
  queryResolvers: productQueryResolvers,
  resolvers: productResolvers,
} = require('./query/products');
const { queryResolvers: accountQueryResolvers } = require('./query/accounts');
const { queryResolvers: passwordQueryResolvers } = require('./query/passwords');
const { queryResolvers: bicyclePropsQueryResolvers } = require('./query/bicycleProps');
const { queryResolvers: productPropsQueryResolvers } = require('./query/productProps');
const { queryResolvers: taskPropsQueryResolvers } = require('./query/taskProps');
const {
  queryResolvers: bicycleInvoiceLineQueryResolvers,
  resolvers: bicycleInvoiceLineResolvers,
} = require('./query/bicycleInvoiceLine');
const {
  queryResolvers: productInvoiceLineQueryResolvers,
  resolvers: productInvoiceLineResolvers,
} = require('./query/productInvoiceLine');
const { queryResolvers: saleQueryResolvers, resolvers: saleResolvers } = require('./query/sale');
const {
  queryResolvers: rentalQueryResolvers,
  resolvers: rentalResolvers,
} = require('./query/rentals');
const {
  queryResolvers: rentalInvoiceLineQueryResolvers,
  resolvers: rentalInvoiceLineResolvers,
} = require('./query/rentalInvoiceLines');
const { queryResolvers: employeeQueryResolvers } = require('./query/employees');

// -------------------------------------------------------

const { queryMutations: customerMutationsResolvers } = require('./mutations/customer');
const { queryMutations: repairMutationsResolvers } = require('./mutations/repair');
const { queryMutations: bicycleMutationsResolvers } = require('./mutations/bicycle');
const {
  queryMutations: taskInvoiceLineMutationsResolvers,
} = require('./mutations/taskInvoiceLine');
const { queryMutations: productMutationsResolvers } = require('./mutations/product');
const { queryMutations: accountMutationsResolvers } = require('./mutations/account');
const { queryMutations: employeePasswordMutationsResolvers } = require('./mutations/password');
const {
  queryMutations: bicycleInvoiceLineMutationsResolvers,
} = require('./mutations/bicycleInvoiceLine');
const {
  queryMutations: productInvoiceLineMutationsResolvers,
} = require('./mutations/productInvoiceLine');
const { queryMutations: saleMutationsResolvers } = require('./mutations/sale');
const { queryMutations: rentalMutationsResolvers } = require('./mutations/rental');
const {
  queryMutations: rentalInvoiceLineMutationsResolvers,
} = require('./mutations/rentalInvoiceLine');
const { queryMutations: taskMutationsResolvers } = require('./mutations/task');
const { queryMutations: taskCategoryMutationsResolvers } = require('./mutations/taskCategory');
const { queryMutations: invoiceMutationsResolvers } = require('./mutations/invoice');

export const resolvers: IResolvers = {
  Query: {
    ...employeeQueryResolvers,
    ...customerQueryResolvers,
    ...bicycleQueryResolvers,
    ...repairQueryResolvers,
    ...repairPropsQueryResolvers,
    ...taskQueryResolvers,
    ...taskInvoiceLineQueryResolvers,
    ...bicycleInvoiceLineQueryResolvers,
    ...productInvoiceLineQueryResolvers,
    ...productQueryResolvers,
    ...accountQueryResolvers,
    ...passwordQueryResolvers,
    ...bicyclePropsQueryResolvers,
    ...productPropsQueryResolvers,
    ...taskPropsQueryResolvers,
    ...saleQueryResolvers,
    ...rentalQueryResolvers,
    ...rentalInvoiceLineQueryResolvers,
  },

  Customer: customerResolvers,
  Bicycle: bicycleResolvers,
  BicycleInvoiceLine: bicycleInvoiceLineResolvers,
  Repair: repairResolvers,
  Task: taskResolvers,
  TaskInvoiceLine: taskInvoiceLineResolvers,
  Product: productResolvers,
  ProductInvoiceLine: productInvoiceLineResolvers,
  Sale: saleResolvers,
  Rental: rentalResolvers,
  RentalInvoiceLine: rentalInvoiceLineResolvers,

  Mutation: {
    ...customerMutationsResolvers,
    ...repairMutationsResolvers,
    ...bicycleMutationsResolvers,
    ...taskInvoiceLineMutationsResolvers,
    ...productMutationsResolvers,
    ...accountMutationsResolvers,
    ...employeePasswordMutationsResolvers,
    ...bicycleInvoiceLineMutationsResolvers,
    ...productInvoiceLineMutationsResolvers,
    ...saleMutationsResolvers,
    ...rentalMutationsResolvers,
    ...rentalInvoiceLineMutationsResolvers,
    ...taskMutationsResolvers,
    ...taskCategoryMutationsResolvers,
    ...invoiceMutationsResolvers,
  },
};
