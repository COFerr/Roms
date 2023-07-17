import { occurrenceRepository } from "../../database/repositories/occurrence.repository";

export async function deleteOccurrenceService(id : string){
    try{
         const occurrenceDeleted = await occurrenceRepository.deleteOccurrence(id)

         return{
            statusCode: 200,
            message: "Message Deleted Successfully",
            data: occurrenceDeleted
         }
    }
    catch(Error : any){
        return{
            statusCode: Error.message ? 400 : 500,
            message: Error.message || "Internal Server Error",
            data: null
        }
    }
}