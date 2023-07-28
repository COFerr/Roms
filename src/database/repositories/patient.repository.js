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
exports.patientRepository = void 0;
const bson_1 = require("bson");
const patient_entity_1 = __importDefault(require("../entities/patient.entity"));
class PatientRepository {
    createPatient(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield patient_entity_1.default.create(payload);
        });
    }
    deletePatient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield patient_entity_1.default.deleteOne(new bson_1.ObjectId(id));
        });
    }
    updatePatient(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield patient_entity_1.default.updateOne({ _id: new bson_1.ObjectId(id) }, payload);
        });
    }
    findPatients() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield patient_entity_1.default.find();
        });
    }
    findPatientByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield patient_entity_1.default.findById(id).populate("timelines");
        });
    }
}
exports.patientRepository = new PatientRepository();
