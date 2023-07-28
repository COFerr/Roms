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
exports.createPatientService = void 0;
const patient_repository_1 = require("../../database/repositories/patient.repository");
const user_repository_1 = require("../../database/repositories/user.repository");
function createPatientService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_repository_1.userRepository.findUserById(JSON.stringify(payload.userId).split('"')[1]);
            if (!user) {
                return {
                    statusCode: 404,
                    message: "User not found.",
                    data: null
                };
            }
            const newPatient = yield patient_repository_1.patientRepository.createPatient(payload);
            user.patients.push(newPatient.id);
            user.save();
            return {
                statusCode: 201,
                message: "Patient created successfully!",
                data: newPatient
            };
        }
        catch (Error) {
            return {
                statusCode: Error.message ? 404 : 500,
                message: Error.message || "Internal server error",
                data: null
            };
        }
    });
}
exports.createPatientService = createPatientService;
