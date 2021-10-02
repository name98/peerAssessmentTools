import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { reducer as auth } from '../store/auth'
import { reducer as gAuth } from '../store/googleAuth'
import { reducer as userProfile } from '../store/userProfile'
import { reducer as registration } from '../store/registretion'
import { reducer as courses } from '../store/courses'
import { reducer as newCourse } from '../store/addCourse'
import { reducer as tasks } from '../store/tasks'

export const store = configureStore({
  reducer: {
    auth,
    gAuth,
    userProfile,
    registration,
    courses,
    newCourse,
    tasks
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>