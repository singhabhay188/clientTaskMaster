// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    //uri: "https://servertaskmaster.onrender.com/api/graphql",
    //uri: "http://localhost:3000/api/graphql",
    uri: "https://server-task-master-tt4x-2ihcrnkk1.vercel.app/api/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;
