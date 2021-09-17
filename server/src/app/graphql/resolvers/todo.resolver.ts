import { ToDo } from "../../interfaces/todo.interface";
import todoSchema from "../../schema/todo.schema"

export const todoResolvers = {
    Query: {
        getTodos: async () => {
            const todos = await todoSchema.find();
            return todos;
        },
        getTodo: async (_: any, { id }: any) => {
            const todo =  await todoSchema.findById(id);
            return todo;
        }
    },
    Mutation: {
        postTodo: async (_: any, { input }: any) => {
            const todo: ToDo = input;
            const res = await todoSchema.create(todo);
            return res;
        },
        putTodo: async (_: any, { id, input }: any) => {
            const todo: ToDo = input;
            const res = await todoSchema.findByIdAndUpdate(id, todo, { new: true });
            return res;
        },
        deleteTodo: async (_: any, { id }: any) => {
            const todo = await todoSchema.findByIdAndRemove(id);
            return todo;
        },
        deleteTodos: async () => {
            await todoSchema.deleteMany({});
            return "All items deleted";
        }
    }
}