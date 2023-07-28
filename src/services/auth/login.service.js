"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.longinService = void 0;
const bcrypt = __importStar(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
const user_repository_1 = require("../../database/repositories/user.repository");
function longinService(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_repository_1.userRepository.findUserByEmail(data.email);
            if (!user) {
                return {
                    statusCode: 404,
                    message: "Invalid email/password",
                    data: null
                };
            }
            const isValidPassword = bcrypt.compareSync(data.password, user.password);
            if (!isValidPassword) {
                return {
                    statusCode: 404,
                    message: "Invalid email/password",
                    data: null
                };
            }
            const payload = {
                name: user.name,
                email: user.email,
                id: user._id
            };
            const options = {
                expiresIn: "1h",
            };
            const secretKey = process.env.SECRET_KEY;
            const token = jwt.sign(payload, secretKey, options);
            return {
                statusCode: 200,
                message: "Logged in!",
                data: { token }
            };
        }
        catch (Error) {
            console.log(Error);
            return {
                statusCode: Error.message ? 404 : 500,
                message: Error.message || "Internal Server Error",
                data: null,
            };
        }
    });
}
exports.longinService = longinService;
