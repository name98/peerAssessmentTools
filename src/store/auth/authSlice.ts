import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthResponse, IError } from '../types';


export interface IAuthState {
  isAuthorized: boolean,
  isAuthorizing: boolean,
  error: IError | undefined,
  payload: IAuthResponse  
}

const initialState: IAuthState = {
  isAuthorized: false,
  isAuthorizing: false,
  error: undefined,  
  payload: {} as IAuthResponse,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStarted: (state) => {
      state.isAuthorizing = true
      state.error = undefined
    },

    authSuccess: (state, { payload }: PayloadAction<IAuthResponse>) => {
      state.isAuthorizing = false
      state.isAuthorized = true
      state.payload = payload
    },

    authFailed: (state, { payload }: PayloadAction<IError>) => {
      state.isAuthorizing = false
      state.isAuthorized = false
      state.error = payload
    },

    unauth: (state) => {
      state.isAuthorized = false
      state.isAuthorizing = false
      state.error = undefined
      state.payload = {} as IAuthResponse
    }
  },
});

export const actions = authSlice.actions

export const reducer = authSlice.reducer
