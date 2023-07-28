import { userRepository } from "../../database/repositories/user.repository";
import { findUsersService } from "./find-user.service";

describe("Testing find users service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    })

    it("Should get all users", async () => {
        const users = {
            user_1 : {name: "chris", email: "chris@test.com", nickname: "chris&greg", password: "123456"},
            user_2 : {name: "greg", email: "greg@test.com", nickname: "chris&greg", password: "123456"}
        }

        const findMock = jest.fn().mockResolvedValue(users)

        userRepository.findUsers = findMock

        const expectedResponse = {
            statusCode: 200,
            message: "Users succesfully found!",
            data: users
        }

        const response = await findUsersService()

        expect(findMock).toHaveBeenCalled()
        expect(response).toEqual(expectedResponse)        
    })

    it("handle error test", async () => {
        const errorMessage = "Error for the test"

        const errorFindMock = jest.fn().mockRejectedValue(new Error(errorMessage))
        userRepository.findUsers = errorFindMock;

        const expectedResponse = {
                statusCode : 400,
                message: errorMessage,
                data: null
        }

        const response = await findUsersService();
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    })
})