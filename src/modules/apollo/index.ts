import { createApolloProvider } from "@vue/apollo-option";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";

const link = createHttpLink({
  uri: "http://localhost:5052/graphql",
});

export const defaultClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: import.meta.env.DEV,
});

export const apollo = createApolloProvider({
  defaultClient,
});
