import { gql } from '@apollo/client';

export const GET_TODOs = gql`
query {
    getTodos {
        _id
        description
        done
    }
}`

export const POST_TODO = gql`
mutation PostTodo($description: String!) {
    postTodo(input: {
        description: $description
    }) {
        _id
        description
        done
    }
}`

export const GET_TODO = gql`
query GetTodo($id: ID!) {
    getTodo (id: $id)  {
        _id
        description
        done
    }
}`

export const PUT_TODO = gql`
mutation PutTodo($id: ID!, $description: String!, $done: Boolean!) {
    putTodo(id: $id, input: {
        description: $description
        done: $done
    }) {
        _id
        description
        done
    }
}`


export const DELETE_TODO = gql`
mutation DeleteTodo($id: ID!) {
    deleteTodo (id: $id)  {
        _id
        description
        done
    }
}`


export const DELETE_TODOs = gql`
mutation DeleteTodos {
    deleteTodos
}`