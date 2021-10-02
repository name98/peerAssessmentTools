import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGAuthCheckUser, IError } from '../types';


export interface IGAuthState {
  isAuthorized: boolean,
  isAuthorizing: boolean,
  error: IError | undefined,
  payload: IGAuthCheckUser
}

const initialState: IGAuthState = {
  isAuthorized: false,
  isAuthorizing: false,
  error: undefined,
  payload: {} as IGAuthCheckUser
};

export const googleAuthSlice = createSlice({
  name: 'gAuthCheck',
  initialState,
  reducers: {
    authStarted: (state) => {
      state.isAuthorizing = true
      state.error = undefined
    },

    authSuccess: (state, { payload }: PayloadAction<IGAuthCheckUser>) => {
      state.isAuthorizing = false
      state.isAuthorized = true
      state.error = undefined
      state.payload = payload
    },

    authFailed: (state, { payload }: PayloadAction<IError>) => {
      state.isAuthorizing = false
      state.isAuthorized = false
      state.error = payload
    },
  },
});

export const actions = googleAuthSlice.actions

export const reducer = googleAuthSlice.reducer
