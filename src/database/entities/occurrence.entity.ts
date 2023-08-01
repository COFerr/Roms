import { IOccurrence } from "../../interfaces/occurrence.interface";
import mongoose, { Schema} from "mongoose";

const occurrenceSchema : Schema = new Schema({
    title: {type : String, require: true, minlength: 3},
    content: {type : String, require: true, minlength: 3},
    type: {type : String, require: true},
    files: [{type : Schema.Types.ObjectId}],
})

const Occurrence = mongoose.model<IOccurrence>("Occurrence", occurrenceSchema)

export default Occurrence;