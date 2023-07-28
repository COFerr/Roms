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
const patient_repository_1 = require("../../database/repositories/patient.repository");
const find_one_patient_service_1 = require("./find-one-patient.service");
describe("Testing find patient by id service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("Should get all patients of an user", () => __awaiter(void 0, void 0, void 0, function* () {
        const patient = { name: "Ken Adams", birthdate: "01/01/1990", contact: "kenadams@test.com", demands: "tell about my travel for the western europe", personalAnnotations: "Compulsive lier", userId: "64acbc1c65374d8907391968", timelines: [] };
        const findPatientByIdMock = jest.fn().mockResolvedValue(patient);
        patient_repository_1.patientRepository.findPatientByID = findPatientByIdMock;
        const expectedResponse = {
            statusCode: 200,
            message: "Patient found successfully!",
            data: patient
        };
        const response = yield (0, find_one_patient_service_1.findPatientByIdService)("64acbc1c65374d8907391968");
        expect(findPatientByIdMock).toHaveBeenCalled();
        expect(response).toEqual(expectedResponse);
    }));
    it("handle error test", () => __awaiter(void 0, void 0, void 0, function* () {
        const errorMessage = "Error for the test";
        const errorFindMock = jest.fn().mockRejectedValue(new Error(errorMessage));
        patient_repository_1.patientRepository.findPatientByID = errorFindMock;
        const expectedResponse = {
            statusCode: 400,
            message: errorMessage,
            data: null
        };
        const response = yield (0, find_one_patient_service_1.findPatientByIdService)("64acbc1c65374d8907391968");
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    }));
});
