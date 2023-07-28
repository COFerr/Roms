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
const update_timeline_service_1 = require("./update-timeline.service");
describe("Update timeline service test", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("Should update an existing timeline", () => __awaiter(void 0, void 0, void 0, function* () {
        const payload = {
            pernsonalDemands: "Improve my communication with Regina Falange",
        };
        const id = "64acbc1c65374d8907391968";
        const timelineUpdateMock = jest.fn().mockResolvedValue(payload);
        timeline_repository_1.timelineRepository.updateTimeline = timelineUpdateMock;
        const expectedResult = {
            statusCode: 200,
            message: "Timeline successfully updated!",
            data: payload
        };
        const response = yield (0, update_timeline_service_1.updateTimelineService)(id, payload);
        expect(response).toEqual(expectedResult);
        expect(timelineUpdateMock).toHaveBeenCalled();
    }));
});
