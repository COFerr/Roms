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
exports.timelineRepository = void 0;
const bson_1 = require("bson");
const timeline_entity_1 = __importDefault(require("../entities/timeline.entity"));
class TimelineRepository {
    createTimeline(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield timeline_entity_1.default.create(payload);
        });
    }
    deleteTimeline(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield timeline_entity_1.default.deleteOne(new bson_1.ObjectId(id));
        });
    }
    updateTimeline(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield timeline_entity_1.default.updateOne(payload);
        });
    }
    findTimelines() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield timeline_entity_1.default.find();
        });
    }
    findTimelineById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield timeline_entity_1.default.findById(id);
        });
    }
}
exports.timelineRepository = new TimelineRepository();
