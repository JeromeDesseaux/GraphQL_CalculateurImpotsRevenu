import { taxesTypeDef } from './types/taxes';
import { impotsResolver } from './resolvers/taxes';
const {
    ApolloServer,
    makeExecutableSchema,
} = require('apollo-server');

const createServer = () => {
    const schema = makeExecutableSchema({
        typeDefs: [taxesTypeDef],
        resolvers: [impotsResolver],
    });

    return new ApolloServer({ schema });
};

export { createServer };
