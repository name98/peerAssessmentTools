import { ICourses, ITaskItem } from "../../store/types";

export type IRequestData = {
    accessToken: string,
    courseId: string
}

export type IResponseData = Array<ITaskItem>

export { getTasks } from './getTasks';