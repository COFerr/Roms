import { ObjectId } from "mongoose";

export interface IUser{
    name: string;
    email: string;
    nickname: string;
    password: string;
    patients: ObjectId[];
    photo?: ObjectId;
}