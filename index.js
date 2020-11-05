import { createServer } from './api/server';

// import { taxesTypeDef } from './api/types/taxes';
// import { impotsResolver } from './api/resolvers/taxes';
// const {
//     ApolloServer,
//     makeExecutableSchema,
// } = require('apollo-server');

// const schema = makeExecutableSchema({
//     typeDefs: [taxesTypeDef],
//     resolvers: [impotsResolver],
// });

// const server = new ApolloServer({ schema });

const server = createServer();

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

// const express = require('express');

// const app = express();
// var port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(port, () => {
//     console.log(`🍺 Ready to brew on http://localhost:3000 !`);
// });
