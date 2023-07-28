import { userRepository } from "../../database/repositories/user.repository"
import { updateUserService } from "./update-user.service"


describe("Update user service test", () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("Should update an existing user", async () => {
        const payload = {
            nickname: "good boy",
        }
        const id = "64acbc1c65374d8907391968" as string

        const userUpdateMock = jest.fn().mockResolvedValue(payload);

        userRepository.updateUser = userUpdateMock;

        const expectedResult = {
            statusCode: 200,
            data: payload,
            message: "User Successfully updated!"
        }

        const response = await updateUserService(id, payload)

        expect(response).toEqual(expectedResult);
        expect(userUpdateMock).toHaveBeenCalled();
    })
})