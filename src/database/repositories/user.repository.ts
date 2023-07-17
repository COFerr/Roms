import { ObjectId } from "bson";
import { IUser } from "../../interfaces/user.interface";
import User from "../entities/user.entity";

class UserRepository {
    async create(payload: IUser){
        return await User.create(payload);
    }
    async findUsers(filter? : any){
        return await User.find(filter);
    }
    async deleteUSer(id : string){
        return await User.deleteOne(new ObjectId(id));
    }
    async updateUser(id: string, payload: any){
        return await User.updateOne({_id : new ObjectId(id)}, {$set : payload});
    }
    async findUserByEmail(email : string){
        return await User.findOne({email});
    }
    async findUserById(id : string){
        return await User.findById(new ObjectId(id)).populate('patients')
    }
    async updateUserById(id : ObjectId, payload : any){
        return await User.findByIdAndUpdate(id, payload)
    }
}

export const userRepository = new UserRepository();