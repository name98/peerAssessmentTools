import { IGAuthCheckUser, IUserGAuth } from "../../store/types";

export type IRequestData = IUserGAuth

export type IResponseData = IGAuthCheckUser

export { postGUserCheck } from './postGUserCheck';