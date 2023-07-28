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
const find_user_service_1 = require("./find-user.service");
describe("Testing find users service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("Should get all users", () => __awaiter(void 0, void 0, void 0, function* () {
        const users = {
            user_1: { name: "chris", email: "chris@test.com", nickname: "chris&greg", password: "123456" },
            user_2: { name: "greg", email: "greg@test.com", nickname: "chris&greg", password: "123456" }
        };
        const findMock = jest.fn().mockResolvedValue(users);
        user_repository_1.userRepository.findUsers = findMock;
        const expectedResponse = {
            statusCode: 200,
            message: "Users succesfully found!",
            data: users
        };
        const response = yield (0, find_user_service_1.findUsersService)();
        expect(findMock).toHaveBeenCalled();
        expect(response).toEqual(expectedResponse);
    }));
    it("handle error test", () => __awaiter(void 0, void 0, void 0, function* () {
        const errorMessage = "Error for the test";
        const errorFindMock = jest.fn().mockRejectedValue(new Error(errorMessage));
        user_repository_1.userRepository.findUsers = errorFindMock;
        const expectedResponse = {
            statusCode: 400,
            message: errorMessage,
            data: null
        };
        const response = yield (0, find_user_service_1.findUsersService)();
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    }));
});
