const resolvers = {
  Query: {
    async getAllCustomers() {
      try {
        const customers = await Customer.find();
        return customers;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
