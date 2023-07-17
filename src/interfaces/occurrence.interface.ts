import { ObjectId } from "mongoose";

export interface IOccurrence{
    title: string,
    content: string,
    type: string,
    files: ObjectId[]
}