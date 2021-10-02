import { ICourses } from "../../store/types";

export type IRequestData = {
    accessToken: string
}

export type IResponseData = Array<ICourses>

export { getCourses } from './getCourses';