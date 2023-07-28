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
const create_patient_service_1 = require("./create-patient.service");
const user_repository_1 = require("../../database/repositories/user.repository");
describe("Create patient service test", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("Should create a new patient", () => __awaiter(void 0, void 0, void 0, function* () {
        const payload = { name: "Drake Ramoray", birthdate: "01/01/1990", contact: "drdrake@test.com", demands: "Learn some math", personalAnnotations: "pretty dumb", userId: "64acbc1c65374d8907391968", timelines: [] };
        const patientCreateMock = jest.fn().mockResolvedValue(payload);
        class User {
            constructor(name, nickname, email, password, patients) {
                this.name = name;
                this.nickname = nickname;
                this.email = email;
                this.password = password;
                this.patients = patients;
            }
            save() { console.log("user saved"); }
        }
        const user = new User("Denis", "denis@test.com", "pimentinha", "123456", []);
        const userMocked = jest.fn().mockResolvedValue(user);
        user_repository_1.userRepository.findUserById = userMocked;
        patient_repository_1.patientRepository.createPatient = patientCreateMock;
        const expectedResult = {
            statusCode: 201,
            data: payload,
            message: "Patient created successfully!"
        };
        const response = yield (0, create_patient_service_1.createPatientService)(payload);
        expect(response).toEqual(expectedResult);
        expect(patientCreateMock).toHaveBeenCalled();
    }));
});
