import { ObjectId } from "mongoose";

export interface ITimeline{
    name: string;
    occurrences: ObjectId[];
}