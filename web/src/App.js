import "./css/styles.min.css";
import { Shell } from "./layouts/AppShell";
import { MantineProvider, Paper } from "@mantine/core";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NotificationsProvider } from "@mantine/notifications";
import { QueryData } from "./components/QueryData";

const theme = {
  colorScheme: "dark",
  primaryColor: "orange",
  defaultRadius: 0,
  fontFamily: "sans-serif",
  fontSizes: { xl: 15 },
};

const client = new ApolloClient({
  // uri: 'http://localhost:3000/graphql',
  uri: "https://4e07-86-52-46-61.eu.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <div className="App min-h-screen">
      <MantineProvider theme={theme}>
        <NotificationsProvider position="top-right">
          <Paper>
            <ApolloProvider client={client}>
              <QueryData />
              <Shell />
            </ApolloProvider>
          </Paper>
        </NotificationsProvider>
      </MantineProvider>
    </div>
  );
};
