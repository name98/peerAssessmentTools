import { actions } from "..";
import { AppThunk } from "../../../app/store";


import { IErrorCode} from "../../types";
import { getTasks } from "../../../api/getTasks";


export const fetchTasks = (id: string): AppThunk => async (dispatch, getState) => {
    const accessToken = getState().auth.payload.accessToken
    if (!accessToken) {
        dispatch(actions.fetchFailed({
            code: IErrorCode.NO_ACCESS,
            message: 'Ошибка аутентификации', // TODO
        }))
        console.log("Fetch course error: No access or Role")
        return
    }
    
    dispatch(actions.fetchStarted())
    try {
        const response = await getTasks({ accessToken, courseId: id })
        if (!response) {
            dispatch(actions.fetchFailed({
                code: IErrorCode.RESPONSE,
                message: 'Некорректный ответ сервера', // TODO: i18n
            }))
            return
        }
        if (!response.success) {
            dispatch(actions.fetchFailed(response.error))
            return
        }
        dispatch(actions.fetchSuccess(response.payload))
        return

    } catch (error) {
        dispatch(actions.fetchFailed({
            code: IErrorCode.REQUEST,
            message: 'Не удалось выполнить запрос'
        }));
    }
}