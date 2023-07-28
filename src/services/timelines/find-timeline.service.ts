import { timelineRepository } from "../../database/repositories/timeline.repository";

export async function findTimelineService(){
    try{
        const timelines = await timelineRepository.findTimelines();

        return{
            statusCode: 200,
            message: "Timelines successfully found",
            data: timelines
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