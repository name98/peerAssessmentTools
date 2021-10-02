import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IRegistrationResponse, IError, IRegistretionProps } from '../types';


export interface IRegState {
  isRegistered: boolean,
  isRegistering: boolean,
  error: IError | undefined,
  payload: IRegistrationResponse,
  registraionProps: IRegistretionProps
}

const initialState: IRegState = {
  isRegistered: false,
  isRegistering: false,
  error: undefined,
  payload: {} as IRegistrationResponse,
  registraionProps: {} as IRegistretionProps
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    regStarted: (state) => {
      state.isRegistering = true
      state.error = undefined
    },

    regSuccess: (state, { payload }: PayloadAction<IRegistrationResponse>) => {
      state.isRegistering = false
      state.isRegistered = true
      state.payload = payload
    },

    regFailed: (state, { payload }: PayloadAction<IError>) => {
      state.isRegistering = false
      state.isRegistered = false
      state.error = payload
    },

    setProps: (state, { payload }: PayloadAction<IRegistretionProps>) => {
      state.error = undefined
      state.isRegistering = false
      state.isRegistered = false
      state.registraionProps = payload
    }
  },
});

export const actions = registrationSlice.actions

export const reducer = registrationSlice.reducer
