import { timelineRepository } from "../../database/repositories/timeline.repository";
import { patientRepository } from "../../database/repositories/patient.repository";
import { ITimeline } from "../../interfaces/timeline.interface";

export async function createTimelineService(payload : ITimeline, patientId : string){
    try{

        const patient = await patientRepository.findPatientByID(patientId)

        if(!patient){
            return{
                statusCode : 200,
                message: "Patient not found",
                data : null
            }
        }

        const timeline = await timelineRepository.createTimeline(payload)
        patient.timelines.push(timeline.id)
        patient.save()

        return{
            statusCode: 200,
            message: "Timeline created successfully",
            data: timeline
        }
    }
    catch(Error : any){
        return{
            statusCode: Error.message ? 400 : 500,
            message: Error.message || "Internal server error",
            code: null
        }
    }
}