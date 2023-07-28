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
exports.OccurrenceController = void 0;
const create_occurrence_service_1 = require("../services/occurrences/create-occurrence.service");
const update_occurrence_service_1 = require("../services/occurrences/update-occurrence.service");
const find_occurrence_service_1 = require("../services/occurrences/find-occurrence.service");
const delete_occurrence_service_1 = require("../services/occurrences/delete-occurrence.service");
class OccurrenceController {
    static createOccurrence(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = req.body;
            const { timelineId } = req.params;
            const result = yield (0, create_occurrence_service_1.createOccurrenceService)(payload, timelineId);
            const { statusCode, message, data } = result;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
    static updateOccurrence(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const payload = req.body;
            const result = yield (0, update_occurrence_service_1.updateOccurrenceService)(id, payload);
            const { statusCode, message, data } = result;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
    static deleteOccurrence(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield (0, delete_occurrence_service_1.deleteOccurrenceService)(id);
            const { statusCode, message, data } = result;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
    static findOccurrences(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, find_occurrence_service_1.findOccurrenceService)();
            const { statusCode, message, data } = result;
            console.log(result);
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
}
exports.OccurrenceController = OccurrenceController;
