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
const update_user_service_1 = require("./update-user.service");
describe("Update user service test", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("Should update an existing user", () => __awaiter(void 0, void 0, void 0, function* () {
        const payload = {
            nickname: "good boy",
        };
        const id = "64acbc1c65374d8907391968";
        const userUpdateMock = jest.fn().mockResolvedValue(payload);
        user_repository_1.userRepository.updateUser = userUpdateMock;
        const expectedResult = {
            statusCode: 200,
            data: payload,
            message: "User Successfully updated!"
        };
        const response = yield (0, update_user_service_1.updateUserService)(id, payload);
        expect(response).toEqual(expectedResult);
        expect(userUpdateMock).toHaveBeenCalled();
    }));
});
