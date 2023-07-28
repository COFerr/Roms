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
exports.findUsersService = void 0;
const user_repository_1 = require("../../database/repositories/user.repository");
function findUsersService(filter) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield user_repository_1.userRepository.findUsers(filter);
            return {
                statusCode: 200,
                message: "Users succesfully found!",
                data: users
            };
        }
        catch (Error) {
            return {
                statusCode: Error.message ? 400 : 500,
                message: Error.message || "Internal server error",
                data: null
            };
        }
    });
}
exports.findUsersService = findUsersService;