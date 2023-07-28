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
const user_repository_1 = require("../../database/repositories/user.repository");
const find_user_patients_service_1 = require("./find_user_patients.service");
describe("Testing find user's patients service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("Should get all patients of an user", () => __awaiter(void 0, void 0, void 0, function* () {
        const patients = [
            { name: "Ken Adams", birthdate: "01/01/1990", contact: "kenadams@test.com", demands: "tell about my travel for the western europe", personalAnnotations: "Compulsive lier", userId: "64acbc1c65374d8907391968", timelines: [] },
            { name: "Drake Ramoray", birthdate: "01/01/1990", contact: "drdrake@test.com", demands: "Lear some math", personalAnnotations: "pretty dumb", userId: "64acbc1c65374d8907391968", timelines: [] },
        ];
        const payload = {
            name: "Denis",
            email: "denis@test.com",
            nickname: "pimentinha",
            password: "123456",
            patients: patients,
        };
        const findUsersPatientsMock = jest.fn().mockResolvedValue(payload);
        user_repository_1.userRepository.findUserById = findUsersPatientsMock;
        const expectedResponse = {
            statusCode: 200,
            message: "Patients found successfully!",
            data: patients
        };
        const response = yield (0, find_user_patients_service_1.findUserPatiensService)("64acbc1c65374d8907391968");
        expect(findUsersPatientsMock).toHaveBeenCalled();
        expect(response).toEqual(expectedResponse);
    }));
    it("handle error test", () => __awaiter(void 0, void 0, void 0, function* () {
        const errorMessage = "Error for the test";
        const errorFindMock = jest.fn().mockRejectedValue(new Error(errorMessage));
        user_repository_1.userRepository.findUserById = errorFindMock;
        const expectedResponse = {
            statusCode: 400,
            message: errorMessage,
            data: null
        };
        const response = yield (0, find_user_patients_service_1.findUserPatiensService)("invalidObjectId");
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    }));
});
