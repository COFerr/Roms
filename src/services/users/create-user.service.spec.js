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
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_repository_1 = require("../../database/repositories/user.repository");
const create_user_service_1 = require("./create-user.service");
jest.mock("bcrypt");
describe("Create user service test", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("Should create a new user", () => __awaiter(void 0, void 0, void 0, function* () {
        const payload = {
            name: "Denis",
            email: "denis@test.com",
            nickname: "pimentinha",
            password: "123456",
            patients: [],
        };
        const passwordHashed = "123456";
        bcrypt_1.default.hash.mockResolvedValue(passwordHashed);
        const userCreateMock = jest.fn().mockResolvedValue(payload);
        user_repository_1.userRepository.create = userCreateMock;
        const expectedResult = {
            statusCode: 201,
            data: payload,
            message: "User created Sucessfully!"
        };
        const response = yield (0, create_user_service_1.createUserService)(payload);
        expect(response).toEqual(expectedResult);
        expect(bcrypt_1.default.hash).toBeCalledWith('123456', 10);
        expect(userCreateMock).toBeCalledWith(Object.assign(Object.assign({}, payload), { password: passwordHashed }));
    }));
});
