import { timelineRepository } from "../../database/repositories/timeline.repository";

export async function deleteTimelineService(id : string){
    try{
        
        const timelineDeleted = await timelineRepository.deleteTimeline(id);

        return{
            statusCode: 200,
            message: "Timeline deleted succesfully",
            data: timelineDeleted
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
