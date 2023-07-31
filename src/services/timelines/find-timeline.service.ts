import { timelineRepository } from "../../database/repositories/timeline.repository";

export async function findTimelineService(id : string){
    try{
        
        const timelines = await timelineRepository.findTimelineById(id);

        const occurences = timelines?.occurrences

        return{
            statusCode: 200,
            message: "Occurrences successfully found",
            data: timelines?.occurrences
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