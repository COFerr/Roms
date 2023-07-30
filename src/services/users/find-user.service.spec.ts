import { userRepository } from "../../database/repositories/user.repository";
import { findUsersByEmailService } from "./find-user.service";

describe("Testing find user by email service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    })

    it("Should get all users", async () => {
        const user = {name: "chris", email: "chris@test.com", nickname: "chris&greg", password: "123456"}
        
        const findMock = jest.fn().mockResolvedValue(user)

        userRepository.findUserByEmail = findMock

        const expectedResponse = {
            statusCode: 200,
            message: "Users succesfully found!",
            data: user
        }

        const response = await findUsersByEmailService(user.email)

        expect(findMock).toHaveBeenCalled()
        expect(response).toEqual(expectedResponse)        
    })

    it("handle error test", async () => {
        const errorMessage = "Error for the test"

        const email = "chris@test.com"

        const errorFindMock = jest.fn().mockRejectedValue(new Error(errorMessage))
        userRepository.findUserByEmail = errorFindMock;

        const expectedResponse = {
                statusCode : 400,
                message: errorMessage,
                data: null
        }

        const response = await findUsersByEmailService(email);
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    })
})