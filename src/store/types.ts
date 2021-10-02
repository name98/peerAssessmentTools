export interface IEmployee {
  id: string | undefined
  fullName: string
  email: string
  mobile: string
  city: string | undefined
  gender: 'male' | 'female' | 'genderqueer'
  departmentId: number | undefined
  hireDate: Date | undefined
  isPermanent: boolean
}

export enum IErrorCode {
  EXCEPTION = -2, // внутренняя ошибка
  UNKNOWN = -1, // неизвестная внутренняя ошибка
  REQUEST = 1,
  RESPONSE = 2,
  NO_ACCESS = 100,
  BAD_REQUEST_DATA = 101,
  NEED_FORCE = 102, // пользователь может повторить запрос с параметром isForced: true
  OPERATION_ERROR = 103, // ошибка при выполнении операции
}

export type IError = {
  code: IErrorCode,
  message?: string,
}

export type IStatus = 'EMPTY' | 'FIRST_LOADING' | 'NOT_LOADED' | 'SUCCESS' | 'LOCKED'

export type IRole = 'teacher' | 'student';

export type IPath = {
  courseId?: string,
  taskId?: string
}

export type IGAuthCheckUser = {
  userState: 'NEW' | 'REGISTERED'
}

export type IUserGAuth = {
  email: string,
  gAccessToken: string
}

export type IRegistretionRequest = {
  email: string,
  gAccessToken?: string,
  role: IRole,
  pass?: string,
  imageUrl?: string,
  firstName: string,
  lastName: string
}

export type IRegistretionProps = {
  email: string,
  gAccessToken: string,
  role?: IRole,
  pass?: string,
  imageUrl?: string,
  firstName: string,
  lastName: string
}

export type iGoogleAuthResponse = {
  email: string,
  gAccessToken: string,
  imageUrl: string,
  firstName: string,
  lastName: string
}

export type IRegistrationResponse = {
  accessToken: string
}

// в будущем использовать для пользователя

export type IUserProfile = {
  email: string,
  role: IRole,
  imageUrl?: string,
  firstName: string,
  lastName: string
}

export type IAuthRequest = {
  gAccessToken?: string,
  pass?: string,
  email: string
}

export type IAuthResponse = {
  accessToken: string | undefined,
}

export type ICourse = {
  courseId: string
}

export type ICourses = {
  id: string,
  adminImageUrl?: string,
  adminName: string,
  name: string,
  subject: string,
  description?: string,
}

export type INewCourseRequest = {
  name: string
  subject: string
  description?: string
}


export type ITaskItem = {
  id: string,
  title: string,
  description?: string
}
