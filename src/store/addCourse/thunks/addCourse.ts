import { actions } from "..";
import { postAuth } from "../../../api/postAuth";
import { postNewCourse } from "../../../api/postNewCourse";
import { AppThunk } from "../../../app/store";


import { IErrorCode, INewCourseRequest } from "../../types";


export const addCourse = (payload: INewCourseRequest): AppThunk => async (dispatch, getState) => {
    dispatch(actions.addCourseStarted())
    try {
        const accessToken = getState().auth.payload.accessToken
        const userEmail = getState().userProfile.payload.email
        const role = getState().userProfile.payload.role        
        if (!accessToken || !userEmail || role != 'teacher') {
            dispatch(actions.courseAddFailed({
                code: IErrorCode.NO_ACCESS,
                message: 'Ошибка аутентификации', // TODO
            }))
            console.log("Add course error: No access or Role")
            return
        }
        const response = await postNewCourse({...payload, accessToken, userEmail})
        if (!response) {
            dispatch(actions.courseAddFailed({
                code: IErrorCode.RESPONSE,
                message: 'Некорректный ответ сервера', // TODO: i18n
            }))
            return
        }
        if (!response.success) {            
            dispatch(actions.courseAddFailed(response.error))
            return
        }

        dispatch(actions.courseAddSuccess(response.payload))
        
    } catch (error) {
        dispatch(actions.courseAddFailed({
            code: IErrorCode.REQUEST,
            message: 'Не удалось выполнить запрос'
        }));
    }
}