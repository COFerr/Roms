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
const timeline_repository_1 = require("../../database/repositories/timeline.repository");
const patient_repository_1 = require("../../database/repositories/patient.repository");
const create_timeline_service_1 = require("./create-timeline.service");
describe("Create user service test", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("Should create a new timeline", () => __awaiter(void 0, void 0, void 0, function* () {
        const payload = {
            name: "my dear diary...",
            occurrences: [],
        };
        class Patient {
            constructor(name, birthdate, contact, demands, personalAnnotations, userId, timelines) {
                this.name = name;
                this.birthdate = birthdate;
                this.contact = contact;
                this.personalAnnotations = personalAnnotations;
                this.demands = demands;
                this.timelines = timelines;
                this.userId = userId;
            }
            save() { console.log("timeline saved"); }
        }
        const patient = new Patient("Ken Adams", new Date("01/01/1990"), "kenadams@test.com", "tell about my travel for the western europe", "Compulsive lier", "64acbc1c65374d8907391968", []);
        const findPatientMock = jest.fn().mockResolvedValue(patient);
        patient_repository_1.patientRepository.findPatientByID = findPatientMock;
        const id = "64af560f81cbae877a280f7f";
        const timelineCreateMock = jest.fn().mockResolvedValue(payload);
        timeline_repository_1.timelineRepository.createTimeline = timelineCreateMock;
        const expectedResult = {
            statusCode: 201,
            data: payload,
            message: "Timeline created successfully!"
        };
        const response = yield (0, create_timeline_service_1.createTimelineService)(payload, id);
        expect(response).toEqual(expectedResult);
        expect(timelineCreateMock).toHaveBeenCalled();
    }));
});
