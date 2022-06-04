const {
  queryResolvers: customerQueryResolvers,
  resolvers: customerResolvers,
} = require('./resolvers/customers');
const {
  queryResolvers: bicycleQueryResolvers,
  resolvers: bicycleResolvers,
} = require('./resolvers/bicycles');
const {
  queryResolvers: repairQueryResolvers,
  resolvers: repairResolvers,
} = require('./resolvers/repairs');
const {
  queryResolvers: taskQueryResolvers,
  resolvers: taskResolvers,
} = require('./resolvers/tasks');
const {
  queryResolvers: taskInvoiceLineQueryResolvers,
  resolvers: taskInvoiceLineResolvers,
} = require('./resolvers/taskInvoiceLines');
const {
  queryResolvers: productQueryResolvers,
  resolvers: productResolvers,
} = require('./resolvers/products');
const {
  queryResolvers: accountQueryResolvers,
} = require('./resolvers/accounts');
const {
  queryResolvers: passwordQueryResolvers,
} = require('./resolvers/passwords');

const {
  queryMutations: customerMutationsResolvers,
} = require('./mutations/customer');
const {
  queryMutations: repairMutationsResolvers,
} = require('./mutations/repair');
const {
  queryMutations: bicycleMutationsResolvers,
} = require('./mutations/bicycle');
const {
  queryMutations: taskInvoiceLineMutationsResolvers,
} = require('./mutations/taskInvoiceLine');
const {
  queryMutations: productMutationsResolvers,
} = require('./mutations/product');
const {
  queryMutations: accountMutationsResolvers,
} = require('./mutations/account');
const {
  queryMutations: employeePasswordMutationsResolvers,
} = require('./mutations/password');

export const resolvers = {
  Mutation: {
    ...customerMutationsResolvers,
    ...repairMutationsResolvers,
    ...bicycleMutationsResolvers,
    ...taskInvoiceLineMutationsResolvers,
    ...productMutationsResolvers,
    ...accountMutationsResolvers,
    ...employeePasswordMutationsResolvers
  },
  Query: {
    ...customerQueryResolvers,
    ...bicycleQueryResolvers,
    ...repairQueryResolvers,
    ...taskQueryResolvers,
    ...taskInvoiceLineQueryResolvers,
    ...productQueryResolvers,
    ...accountQueryResolvers,
    ...passwordQueryResolvers
  },
  Bicycle: bicycleResolvers,
  Customer: customerResolvers,
  Repair: repairResolvers,
  TaskInvoiceLine: taskInvoiceLineResolvers,
  Task: taskResolvers,
  Product: productResolvers,

  // Subscription: {},
};
