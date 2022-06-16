import './css/styles.min.css';
import Shell from './layouts/AppShell';
import { MantineProvider, Paper } from '@mantine/core';
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from '@apollo/client';

const theme = {
  colorScheme: 'dark',
  primaryColor: 'orange',
  defaultRadius: 0,
  fontFamily: 'sans-serif',
  fontSizes: { xl: 15 },
};

const client = new ApolloClient({
  uri: 'https://5e7c-86-52-46-61.eu.ngrok.io/graphql',
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query Query {
//         customers {
//           fullName
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));



function App() {
  return (
    <div className="App min-h-screen">
      <MantineProvider theme={theme}>
        <Paper>
          <ApolloProvider client={client}>
            <Shell />
          </ApolloProvider>
        </Paper>
      </MantineProvider>
    </div>
  );
}

export default App;
