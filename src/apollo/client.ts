// import AppSyncConfig from "./aws-exports";

import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { createHttpLink } from "apollo-link-http";
// import { setContext } from "apollo-link-context";

// const API_URL = createHttpLink({
//   uri:
//     process.env.API_URL ||
//     "https://mib6wapo5c.execute-api.eu-central-1.amazonaws.com/dev/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       cors: "no-cors",
//     },
//   };
// });
// console.log("APIURL", API_URL);
export const client = new ApolloClient({
  cache: new InMemoryCache()
});
