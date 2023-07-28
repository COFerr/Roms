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
const update_patient_service_1 = require("./update-patient.service");
describe("Update patient service test", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("Should update an existing patient", () => __awaiter(void 0, void 0, void 0, function* () {
        const payload = {
            name: "Everybody hates testing with jest",
        };
        const id = "64acbc1c65374d8907391968";
        const patientUpdateMock = jest.fn().mockResolvedValue(payload);
        patient_repository_1.patientRepository.updatePatient = patientUpdateMock;
        const expectedResult = {
            statusCode: 200,
            message: "Patient successfully updated!",
            data: payload
        };
        const response = yield (0, update_patient_service_1.updatePatientService)(id, payload);
        expect(response).toEqual(expectedResult);
        expect(patientUpdateMock).toHaveBeenCalled();
    }));
});
