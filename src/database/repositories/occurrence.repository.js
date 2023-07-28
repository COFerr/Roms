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
exports.occurrenceRepository = void 0;
const bson_1 = require("bson");
const occurrence_entity_1 = __importDefault(require("../entities/occurrence.entity"));
class OccurrenceRepository {
    createOccurrence(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield occurrence_entity_1.default.create(payload);
        });
    }
    deleteOccurrence(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield occurrence_entity_1.default.deleteOne({ _id: new bson_1.ObjectId(id) });
        });
    }
    findOccurrences() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield occurrence_entity_1.default.find();
        });
    }
    updateOccurrence(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield occurrence_entity_1.default.updateOne({ _id: new bson_1.ObjectId(id) }, { $set: payload });
        });
    }
}
exports.occurrenceRepository = new OccurrenceRepository();
