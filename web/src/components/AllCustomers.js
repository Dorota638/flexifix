import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


const GET_ALL_CUSTOEMRS = gql`
  query Query {
    customers {
      id
      fullName
    }
  }
`;

export const AllCustomers = () => {
  const { loading, error, data } = useQuery(GET_ALL_CUSTOEMRS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.customers.map(({ fullName, id }) => (
    <div key={id}>
      <p>{fullName}</p>
    </div>
  ));
};
