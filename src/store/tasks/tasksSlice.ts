import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGAuthCheckUser, IError, ICourses, ITaskItem } from '../types';


export interface ITaskState {
  isLoading: boolean,
  isLock: boolean,
  error: IError | undefined,
  payload: Array<ITaskItem>
}

const initialState: ITaskState = {
  isLoading: false,
  error: undefined,
  isLock: true,
  payload: {} as Array<ITaskItem>
};

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    fetchStarted: (state) => {
      state.isLoading = true
      state.isLock = true
      state.error = undefined
    },

    fetchSuccess: (state, { payload }: PayloadAction<Array<ITaskItem>>) => {
      state.isLoading = false
      state.error = undefined
      state.isLock = false
      state.payload = payload
    },

    fetchFailed: (state, { payload }: PayloadAction<IError>) => {
      state.isLoading = false
      state.error = payload
      state.isLock = false
    },
  },
});

export const actions = tasks.actions

export const reducer = tasks.reducer
