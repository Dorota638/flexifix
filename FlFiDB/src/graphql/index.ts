import { GraphQLSchema, GraphQLObjectType, GraphQLList } from 'graphql';
// import { CREATE_USER } from './Mutations/Customer';
import { GET_ALL_USERS } from './Queries/Customer';


const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    GET_ALL_USERS
  },

});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {

  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

  // fields: () => ({
  //   customers: {
  //     type: new GraphQLList(CustomerType),
  //     description: 'List of all customers',
  //     resolve: () => db().query(`SELECT * FROM customer`),
  //   },
  //   bicycle: {
  //     type: new GraphQLList(BicycleType),
  //     description: 'single bicycle',
  //     resolve: (rootValue, { id }) => {
  //       return getBicycle({ id }).then((value) => value[0]);
  //     },
  //   },
  // }),