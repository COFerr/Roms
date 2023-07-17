import { occurrenceRepository } from "../../database/repositories/occurrence.repository";
import { timelineRepository } from "../../database/repositories/timeline.repository";
import { IOccurrence } from "../../interfaces/occurrence.interface";

export async function createOccurrenceService(payload: IOccurrence, timelineId : string){
    try{

        const timeline = await timelineRepository.findTimelineById(timelineId)

        if(!timeline){
            return{
                statusCode : 404,
                message : "Timeline not found",
                data : null
            }
        }
        
        const newOccurrence = await occurrenceRepository.createOccurrence(payload);
        timeline.occurrences.push(newOccurrence.id)
        timeline.save()

        return{
            statusCode: 200,
            message: "Occurrence create successfully",
            data: newOccurrence
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