import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICourse, IError } from '../types';


export interface INewCourseState {
  isLoading: boolean,
  error: IError | undefined,
  payload: ICourse
}

const initialState: INewCourseState = {
  isLoading: false,
  error: undefined,
  payload: {} as ICourse,
};

export const addCourseSlice = createSlice({
  name: 'addCourseSlice',
  initialState,
  reducers: {
    addCourseStarted: (state) => {
      state.isLoading = true
      state.error = undefined
    },

    courseAddSuccess: (state, { payload }: PayloadAction<ICourse>) => {
      state.isLoading = false
      state.payload = payload
    },

    courseAddFailed: (state, { payload }: PayloadAction<IError>) => {
      state.isLoading = false
      state.error = payload
    },

    courseSetInitialState: (state) => {
      state.isLoading =  false
      state.error = undefined
      state.payload = { } as ICourse
    }
  },
});

export const actions = addCourseSlice.actions

export const reducer = addCourseSlice.reducer
