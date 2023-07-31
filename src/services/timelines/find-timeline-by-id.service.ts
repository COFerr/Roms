import { timelineRepository } from "../../database/repositories/timeline.repository";

export async function findTimelineByIdService(id : string){
    try{
        
        const timelines = await timelineRepository.findTimelineById(id);

        return{
            statusCode: 200,
            message: "Timeline successfully found",
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