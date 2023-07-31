import { ObjectId } from "bson";
import File from "../entities/file.entity";
import { IFile } from "../../interfaces/file.interface";

class FileRepository{
    async create(payload : IFile){
        return await File.create(payload);
    }
}

export const fileRepository = new FileRepository()