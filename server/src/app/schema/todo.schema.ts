import { model, Schema } from "mongoose";
import { ToDo } from "../interfaces/todo.interface";

const schema = new Schema({
    description: {
        type: String,
        require: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false
});

export default model<ToDo>("todo", schema);