import { ApolloServer } from "apollo-server-lambda";
import resolvers from "./src/resolvers";
import schemaDirectives from "./src/directives";
import typeDefs from "./src/typeDefs.graphql";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  mocks: true,
  mockEntireSchema: false
});

exports.graphqlHandler = server.createHandler();
