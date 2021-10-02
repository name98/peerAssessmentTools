import { actions } from "..";
import { actions as registretionActions} from "../../registretion/";
import { postGUserCheck } from "../../../api/postGUserCheck";
import { useAppSelector } from "../../../app/hooks";
import { AppThunk } from "../../../app/store";


import { IErrorCode, IUserGAuth, iGoogleAuthResponse } from "../../types";


export const fetchGAuth = (payload: iGoogleAuthResponse): AppThunk => async (dispatch) => {
    dispatch(actions.authStarted())
    try {
        const response = await postGUserCheck({gAccessToken: payload.gAccessToken, email: payload.email})
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
        if (response.payload.userState === 'NEW'){
            dispatch(registretionActions.setProps(payload))
        }
        dispatch(actions.authSuccess(response.payload))
        return
        
    } catch (error) {
        dispatch(actions.authFailed({
            code: IErrorCode.REQUEST,
            message: 'Не удалось выполнить запрос'
        }));
    }
    dispatch(actions.authSuccess({userState: 'NEW'}))
}