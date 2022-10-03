import { ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  };
});

export const apolloClient = new ApolloClient({
  // uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
});
