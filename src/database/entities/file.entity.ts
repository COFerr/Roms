import { IFile } from "../../interfaces/file.interface";
import mongoose, { Schema} from "mongoose";

const fileSchema : Schema = new Schema({
    fileName: {type : String, require: true, minlength: 3},
    mimeType: {type : String, require: true, minlength: 3},
},
{timestamps : true}
)

const File = mongoose.model<IFile>("File", fileSchema)

export default File;