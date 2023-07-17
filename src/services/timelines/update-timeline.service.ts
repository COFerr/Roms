import { timelineRepository } from "../../database/repositories/timeline.repository";

export async function updateTimelineService(id: string, payload: any){
    try{

        const timelineUpdated = await timelineRepository.updateTimeline(id, payload);

        return{
            statusCode: 200,
            message: "Timeline successfully updated",
            data: timelineUpdated
        }
    }
    catch(Error){
        return{
            statusCode: 500,
            message:"Internal Server Error",
            data: null
        }
    }
}