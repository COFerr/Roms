import { ObjectId } from "bson";
import Occurrence from "../entities/occurrence.entity";
import { IOccurrence } from "../../interfaces/occurrence.interface";

class OccurrenceRepository{
    async createOccurrence(payload : IOccurrence){
        return await Occurrence.create(payload);
    }
    async deleteOccurrence(id: string){
        return await Occurrence.deleteOne({_id : new ObjectId(id)});
    }
    async findOccurrences(){
        return await Occurrence.find();
    }
    async updateOccurrence(id: string, payload : any){
        return await Occurrence.updateOne({_id : new ObjectId(id)}, {$set : payload});
    }
}

export const occurrenceRepository = new OccurrenceRepository()