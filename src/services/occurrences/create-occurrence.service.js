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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOccurrenceService = void 0;
const occurrence_repository_1 = require("../../database/repositories/occurrence.repository");
const timeline_repository_1 = require("../../database/repositories/timeline.repository");
function createOccurrenceService(payload, timelineId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const timeline = yield timeline_repository_1.timelineRepository.findTimelineById(timelineId);
            if (!timeline) {
                return {
                    statusCode: 404,
                    message: "Timeline not found",
                    data: null
                };
            }
            const newOccurrence = yield occurrence_repository_1.occurrenceRepository.createOccurrence(payload);
            timeline.occurrences.push(newOccurrence.id);
            timeline.save();
            return {
                statusCode: 200,
                message: "Occurrence create successfully",
                data: newOccurrence
            };
        }
        catch (Error) {
            return {
                statusCode: Error.message ? 400 : 500,
                message: Error.message || "Internal Server Error",
                data: null
            };
        }
    });
}
exports.createOccurrenceService = createOccurrenceService;
