import mongoose, { Schema } from "mongoose";
import { ITimeline } from "../../interfaces/timeline.interface";

const timelineSchema: Schema = new Schema(
    {
        name: { type: String, require: true, minlength: 3, unique: true },
        occurrences: [{type : Schema.Types.ObjectId, ref : "Occurrence"}]
    },
    {timestamps : true}
)

const  Timeline = mongoose.model<ITimeline>("Timeline", timelineSchema);

export default Timeline;