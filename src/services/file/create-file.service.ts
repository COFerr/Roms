import * as bcrypt from "bcrypt"

import { fileRepository } from "../../database/repositories/file.repository";
import { IFile } from "../../interfaces/file.interface";

export async function createFileService(payload: IFile){
    try{
        
        const newFile = await fileRepository.create(payload);

        return{
            statusCode: 201,
            data: newFile,
            message: "File created Sucessfully!"
        }
    }
    catch(Error : any){
        console.log(Error);
        
        return{
            statusCode: Error.message ? 400 : 500,
            message: Error.message || "Internal server error",
            data: null
        }
    }
}