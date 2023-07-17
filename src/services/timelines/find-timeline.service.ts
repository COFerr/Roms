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
    catch(Error){
        return{
            statusCode: 500,
            message: "Internal Server Error",
            data: null
        }
    }
}