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
exports.PatientController = void 0;
const bson_1 = require("bson");
const create_patient_service_1 = require("../services/patients/create-patient.service");
const delete_patient_service_1 = require("../services/patients/delete-patient.service");
const update_patient_service_1 = require("../services/patients/update-patient.service");
const find_all_patients_service_1 = require("../services/patients/find-all-patients.service");
const find_one_patient_service_1 = require("../services/patients/find-one-patient.service");
const find_patients_timelines_service_1 = require("../services/patients/find-patients-timelines.service");
class PatientController {
    static createPatient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = req.body;
            const { userId } = req.params;
            const result = yield (0, create_patient_service_1.createPatientService)(Object.assign(Object.assign({}, payload), { userId: new bson_1.ObjectId(userId) }));
            const { statusCode, message, data } = result;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
    static deletePatient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield (0, delete_patient_service_1.deletePatientservice)(id);
            const { statusCode, message, data } = result;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
    static updatePatient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const payload = req.body;
            const result = yield (0, update_patient_service_1.updatePatientService)(id, payload);
            const { statusCode, message, data } = result;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
    static findPatients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, find_all_patients_service_1.findPatientService)();
            const { statusCode, message, data } = result;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
    static finPatientByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield (0, find_one_patient_service_1.findPatientByIdService)(id);
            const { statusCode, message, data } = result;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
    static findPatientTimelinesService(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const timelines = yield (0, find_patients_timelines_service_1.findPatientsTimelinesservice)(id);
            console.log(timelines);
            const { statusCode, message, data } = timelines;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
}
exports.PatientController = PatientController;
