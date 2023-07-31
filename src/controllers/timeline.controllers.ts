import { Request, Response } from "express";
import { createTimelineService } from "../services/timelines/create-timeline.service";
import { deleteTimelineService } from "../services/timelines/delete-timeline.service";
import { updateTimelineService } from "../services/timelines/update-timeline.service";
import { findTimelineService } from "../services/timelines/find-timeline.service";
import { findTimelineByIdService } from "../services/timelines/find-timeline-by-id.service";

export class timelineController{
    static async createTimeline(req : Request, res : Response){
        const payload  = req.body;
        const {patientId} = req. params

        const result = await createTimelineService(payload, patientId)
        const{statusCode, message, data} = result

        res.status(statusCode).json({
            message,
            data
        })
    }
    static async deleteTimeline(req : Request, res : Response){
        const {id} = req.params

        const result = await deleteTimelineService(id);
        const{statusCode, message, data} = result
        
        res.status(statusCode).json({
            message,
            data
        })
    }
    static async updateTimeline(req : Request, res : Response){
        const {id} = req.params;
        const payload = req.body;

        const result = await updateTimelineService(id, payload);
        const {statusCode, message, data } = result

        res.status(statusCode).json({
            message,
            data
        })
    }
    static async findTimelines(req: Request, res : Response){
        const {timelineId} = req.params
        const result = await findTimelineService(timelineId)
        const {statusCode, message, data} = result

        res.status(statusCode).json({
            message,
            data
        })
    }
    static async findTimelineByID(req: Request, res : Response){
        const {timelineId} = req.params
        const result = await findTimelineByIdService(timelineId)
        const {statusCode, message, data} = result

        res.status(statusCode).json({
            message,
            data
        })
    }
}