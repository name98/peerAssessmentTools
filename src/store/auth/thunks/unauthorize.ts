import { actions } from "..";
import { AppThunk } from "../../../app/store";
import { IErrorCode } from "../../types";


export const unauthorize = (): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.unauth())

  } catch (error) {
    dispatch(actions.authFailed({
      code: IErrorCode.REQUEST,
      message: 'Wrong...'
    }));
  }
}
