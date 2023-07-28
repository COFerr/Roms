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
const find_timeline_service_1 = require("./find-timeline.service");
describe("Testing find timeline service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("Should get all timelines of an user", () => __awaiter(void 0, void 0, void 0, function* () {
        const timelines = [
            { name: "Ken Adams", occurrences: [] },
            { name: "Drake Ramoray", occurrences: [] },
        ];
        const findTimelinesPatientsMock = jest.fn().mockResolvedValue(timelines);
        timeline_repository_1.timelineRepository.findTimelines = findTimelinesPatientsMock;
        const expectedResponse = {
            statusCode: 200,
            message: "Timelines successfully found",
            data: timelines
        };
        const response = yield (0, find_timeline_service_1.findTimelineService)();
        expect(findTimelinesPatientsMock).toHaveBeenCalled();
        expect(response).toEqual(expectedResponse);
    }));
    it("handle error test", () => __awaiter(void 0, void 0, void 0, function* () {
        const errorMessage = "Error for the test";
        const errorFindMock = jest.fn().mockRejectedValue(new Error(errorMessage));
        timeline_repository_1.timelineRepository.findTimelines = errorFindMock;
        const expectedResponse = {
            statusCode: 400,
            message: errorMessage,
            data: null
        };
        const response = yield (0, find_timeline_service_1.findTimelineService)();
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    }));
});
