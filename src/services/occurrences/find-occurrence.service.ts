import { occurrenceRepository } from "../../database/repositories/occurrence.repository";

export async function findOccurrenceService(){
    try{
        const allOccurrences = await occurrenceRepository.findOccurrences();

        return{
            statusCode: 200,
            message: "Occurrences successfully found!",
            data: allOccurrences
        }
    }
    catch(Error : any){
        return{
            statusCode : Error.message ? 400 : 500,
            message : Error.message || "Internal Server Error",
            data : null
        }
    }
}