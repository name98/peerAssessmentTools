import { actions } from "..";
import { postAuth } from "../../../api/postAuth";
import { AppThunk } from "../../../app/store";


import { IErrorCode, IAuthRequest } from "../../types";


export const auth = (payload: IAuthRequest): AppThunk => async (dispatch) => {
    dispatch(actions.authStarted())
    try {
        const response = await postAuth(payload)
        if (!response) {
            dispatch(actions.authFailed({
                code: IErrorCode.RESPONSE,
                message: 'Некорректный ответ сервера', // TODO: i18n
            }))
            return
        }
        if (!response.success) {            
            dispatch(actions.authFailed(response.error))
            return
        }

        dispatch(actions.authSuccess(response.payload))
        
    } catch (error) {
        dispatch(actions.authFailed({
            code: IErrorCode.REQUEST,
            message: 'Не удалось выполнить запрос'
        }));
    }
}