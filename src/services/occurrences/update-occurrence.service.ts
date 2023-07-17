import { occurrenceRepository } from "../../database/repositories/occurrence.repository";

export async function updateOccurrenceService(id : string, payload: any){
    try{
        const updatedOccurrence = await occurrenceRepository.updateOccurrence(id, payload)

        return{
            statusCode: 200,
            message: "Occurrence Succesfully updated!",
            data: updatedOccurrence
        }
    }
    catch(Error : any){
        return{
            statusCode: Error.message ? 400 : 500,
            message : Error.message || "Internal Server Error!",
            data: null
        }
    }
}