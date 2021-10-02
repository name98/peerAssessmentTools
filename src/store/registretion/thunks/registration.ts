import { actions } from "..";
import { actions as authActions} from "../../auth";
import { postRegistretion } from "../../../api/postRegistretion";
import { AppThunk } from "../../../app/store";


import { IErrorCode, IRegistretionRequest } from "../../types";


export const registretion = (payload: IRegistretionRequest): AppThunk => async (dispatch) => {
    dispatch(actions.regStarted())

    try {
        const response = await postRegistretion(payload)
        if (!response) {
            dispatch(actions.regFailed({
                code: IErrorCode.RESPONSE,
                message: 'Некорректный ответ сервера', // TODO: i18n
            }))
            return
        }
        if (!response.success) {        
            dispatch(actions.regFailed(response.error))
            return
        }
        dispatch(actions.regSuccess(response.payload))
        dispatch(authActions.authSuccess({accessToken: response.payload.accessToken}))
        
    } catch (error) {
        dispatch(actions.regFailed({
            code: IErrorCode.REQUEST,
            message: 'Не удалось выполнить запрос'
        }));
    }
}