import { Request, Response } from "express";
import { createOccurrenceService } from "../services/occurrences/create-occurrence.service";
import { updateOccurrenceService } from "../services/occurrences/update-occurrence.service";
import { findOccurrenceService } from "../services/occurrences/find-occurrence.service";
import { deleteOccurrenceService } from "../services/occurrences/delete-occurrence.service";
import { createFileService } from "../services/file/create-file.service";

export class OccurrenceController{
    static async createOccurrence(req : Request, res : Response){
        const payload = req.body
        console.log(payload)
        const {timelineId} = req.params
        const file = {
            fileName : req.file?.filename,
            mimeType : req.file?.mimetype
        }
        console.log(file)
        let fileCreated
        if(file){fileCreated = await createFileService(file)}
        const result = await createOccurrenceService({...payload, files : [fileCreated?.data?._id]}, timelineId)
        const { statusCode, message, data } = result

        res.status(statusCode).json({
            message,
            data
        })
    }

    static async updateOccurrence(req : Request, res : Response){
        const {id} = req.params
        const payload = req.body

        const result = await updateOccurrenceService(id, payload)
        const {statusCode, message, data} = result

        res.status(statusCode).json({
            message,
            data
        })
    }

    static async deleteOccurrence(req : Request, res : Response){
        const {id} = req.params

        const result = await deleteOccurrenceService(id)
        const{statusCode, message, data} = result

        res.status(statusCode).json({
            message,
            data
        })
    }
    
    static async findOccurrences(req : Request, res : Response){

        const result = await findOccurrenceService()
        const {statusCode, message, data} = result

        console.log(result)

        res.status(statusCode).json({
            message,
            data
        })
    }
}