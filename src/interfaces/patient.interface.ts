import { ObjectId } from "mongoose";

export interface IPatient{
    name : string;
    birthdate: Date;
    contact: string;
    demands: string;
    personalAnnotations: string;
    userId : ObjectId;
    timelines: ObjectId[];
}