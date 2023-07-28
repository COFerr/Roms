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
exports.UserController = void 0;
const create_user_service_1 = require("../services/users/create-user.service");
const find_user_service_1 = require("../services/users/find-user.service");
const update_user_service_1 = require("../services/users/update-user.service");
const delete_user_service_1 = require("../services/users/delete-user.service");
const find_user_patients_service_1 = require("../services/users/find_user_patients.service");
class UserController {
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = req.body;
            const result = yield (0, create_user_service_1.createUserService)(payload);
            const { statusCode, message, data } = result;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
    static findUSers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = req.query;
            const result = yield (0, find_user_service_1.findUsersService)(filter);
            const { statusCode, message, data } = result;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const payload = req.body;
            const result = yield (0, update_user_service_1.updateUserService)(id, payload);
            const { statusCode, message, data } = result;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield (0, delete_user_service_1.deleteUSerService)(id);
            const { statusCode, message, data } = result;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
    static findUserPatients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield (0, find_user_patients_service_1.findUserPatiensService)(id);
            const { statusCode, message, data } = result;
            res.status(statusCode).json({
                message,
                data
            });
        });
    }
}
exports.UserController = UserController;
