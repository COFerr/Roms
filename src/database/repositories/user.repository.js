"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const bson_1 = require("bson");
const user_entity_1 = __importDefault(require("../entities/user.entity"));
class UserRepository {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_entity_1.default.create(payload);
        });
    }
    findUsers(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_entity_1.default.find(filter);
        });
    }
    deleteUSer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_entity_1.default.deleteOne(new bson_1.ObjectId(id));
        });
    }
    updateUser(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_entity_1.default.updateOne({ _id: new bson_1.ObjectId(id) }, { $set: payload });
        });
    }
    findUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_entity_1.default.findOne({ email });
        });
    }
    findUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_entity_1.default.findById(new bson_1.ObjectId(id)).populate('patients');
        });
    }
    updateUserById(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_entity_1.default.findByIdAndUpdate(id, payload);
        });
    }
}
exports.userRepository = new UserRepository();
