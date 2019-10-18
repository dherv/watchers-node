import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
// import { GRAPHQL_URL } from '../configs';

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: "http://localhost:3000/graphql",
      cache: new InMemoryCache().restore(initialState || {})
    })
);
