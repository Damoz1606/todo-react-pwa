import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import config from './config/config';
import { typeDefs } from './app/graphql/typeDefs'
import { todoResolvers } from './app/graphql/resolvers/todo.resolver'
import { ApolloServer } from 'apollo-server-express';

const app = express();

//settings
app.set("port", config.PORT);

//middlewares
app.use(cors());
// app.use(morgan("dev"));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//GraphQL
const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers: [todoResolvers]
    });
    await server.start();
    server.applyMiddleware({ app, path: "/api/v1/todo"})
}

startServer();

export default app;