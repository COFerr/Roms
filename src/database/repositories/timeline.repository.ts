import { ObjectId } from "bson";
import Timeline from "../entities/timeline.entity";
import { ITimeline } from "../../interfaces/timeline.interface";

class TimelineRepository{
    async createTimeline(payload : ITimeline){
        return await Timeline.create(payload);
    }
    async deleteTimeline(id : string){
        return await Timeline.deleteOne(new ObjectId(id));
    }
    async updateTimeline(id: string, payload : any){
        return await Timeline.updateOne(payload);
    }
    async findTimelines(){
        return await Timeline.find();
    }
    async findTimelineById(id : string){
        return await Timeline.findById(new ObjectId(id)).populate('occurrences')
    }
}

export const timelineRepository = new TimelineRepository()