import { Document } from "mongoose";

export interface ToDo extends Document {
    _id?: string,
    description: string,
    done: boolean
}