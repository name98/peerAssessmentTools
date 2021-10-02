import { IUserProfile, IRegistretionRequest } from "../../store/types";

export type IRequestData = {
    accessToken: string
}

export type IResponseData = IUserProfile

export { postUserProfile } from './postUserProfile';