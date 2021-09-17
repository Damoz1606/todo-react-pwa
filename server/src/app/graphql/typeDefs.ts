import { gql } from "apollo-server-core";

export const typeDefs = gql `

    type Query {
        getTodos: [ToDo]!
        getTodo(id: ID!): ToDo
    }

    type Mutation {
        postTodo(input: inputToDo!): ToDo!
        putTodo(id: ID!, input: inputToDo!): ToDo!
        deleteTodo(id: ID!): ToDo
        deleteTodos: String!
    }

    type ToDo {
        _id: ID
        description: String
        done: Boolean
    }

    input inputToDo {
        description: String!
        done: Boolean
    }

`