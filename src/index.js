import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './graphql/resolvers.js';
import { typeDefs } from './graphql/typeDefs.js';


import { connectDB } from './conexionDB.js';

connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
});

console.log(`🚀  Server ready at: ${url}`);