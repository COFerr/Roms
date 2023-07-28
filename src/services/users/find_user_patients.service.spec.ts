import { userRepository } from "../../database/repositories/user.repository";
import { findUserPatiensService } from "./find_user_patients.service";
import { ObjectId } from "mongoose";

describe("Testing find user's patients service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    })

    it("Should get all patients of an user", async () => {
        const patients = [
            {name: "Ken Adams",birthdate: "01/01/1990", contact: "kenadams@test.com", demands:"tell about my travel for the western europe", personalAnnotations: "Compulsive lier", userId: "64acbc1c65374d8907391968", timelines: []},
            {name: "Drake Ramoray",birthdate: "01/01/1990", contact: "drdrake@test.com", demands:"Lear some math", personalAnnotations: "pretty dumb", userId: "64acbc1c65374d8907391968", timelines: []},
        ]

        const payload = {
            name: "Denis",
            email: "denis@test.com",
            nickname: "pimentinha",
            password: "123456",
            patients: patients,
        }
        const findUsersPatientsMock = jest.fn().mockResolvedValue(payload)

        userRepository.findUserById = findUsersPatientsMock

        const expectedResponse = {
            statusCode : 200,
            message : "Patients found successfully!",
            data : patients
        }

        const response = await findUserPatiensService("64acbc1c65374d8907391968")

        expect(findUsersPatientsMock).toHaveBeenCalled()
        expect(response).toEqual(expectedResponse)        
    })

    it("handle error test", async () => {
        const errorMessage = "Error for the test"

        const errorFindMock = jest.fn().mockRejectedValue(new Error(errorMessage))
        userRepository.findUserById = errorFindMock;

        const expectedResponse = {
                statusCode : 400,
                message: errorMessage,
                data: null
        }

        const response = await findUserPatiensService("invalidObjectId");
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    })
})