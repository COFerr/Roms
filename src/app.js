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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const config_1 = require("./database/config");
const dotenv_1 = require("dotenv");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const timeline_routes_1 = __importDefault(require("./routes/timeline.routes"));
const patient_routes_1 = __importDefault(require("./routes/patient.routes"));
const occurrence_routes_1 = __importDefault(require("./routes/occurrence.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
(0, config_1.databaseConnect)();
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use((0, express_1.json)());
app.use(user_routes_1.default);
app.use(timeline_routes_1.default);
app.use(patient_routes_1.default);
app.use(occurrence_routes_1.default);
app.use(auth_routes_1.default);
app.listen(process.env.APP_PORT || 3333, () => {
    console.log("the server is running in port: " + process.env.APP_PORT || 3333);
});
