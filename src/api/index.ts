import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { IError, IErrorCode } from '../store/types'

// import { Api } from './types'


const requestConfig: AxiosRequestConfig = {
  timeout: 10000,
  // validateStatus: (status) => status === 200,
  validateStatus: (status) => true,
}

export const api = axios.create(requestConfig)

if (process.env.NODE_ENV !=='production') {
  api.interceptors.request.use(
    (request: AxiosRequestConfig): AxiosRequestConfig => {
      console.log('[api request]', request)
      return request;
    },

    (error: any): IErrorResponse => {
      console.warn('[api request error]', error)
      throw {
        code: IErrorCode.REQUEST,
        message: error.message,
      }
      // return {
      //   success: false,
      //   error: {
      //     code: IErrorCode.REQUEST,
      //     message: error.message,
      //   }
      // };
    },
  )

  api.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      console.log('[api response]', response)

      if (response.status === 403) {
        // TODO: or throw ?
        return {
          ...response,
          data: {
            success: false,
            error: {
              code: IErrorCode.NO_ACCESS,
              // message: error.message,
            }
          }
        }
      }

      if (response.status !== 200) {
        // TODO: or throw ?
        return {
          ...response,
          data: {
            success: false,
            error: {
              code: IErrorCode.RESPONSE,
              // message: error.message,
            }
          }
        }
      }

      // if (response.status !== 200) {
      //   throw new Error('response.status !== 200');
      // }

      // throw new Error('test error');

      // if (!response.data) {
      //   throw {
      //     code: ''
      //   }
      // }
      return response
    },

    (error: any): IErrorResponse => {
      console.warn('[api response error]', error)
      throw {
        code: IErrorCode.RESPONSE,
        message: error.message,
      }
      // return {
      //   success: false,
      //   error: {
      //     code: IErrorCode.RESPONSE,
      //     message: error.message,
      //   }
      // }
    },
  )
}

export type ISuccessResponse<T> = {
  success: true,
  payload: T,
}

export type IErrorResponse = {
  success: false,
  error: IError,
}

export type IResponse<T> = ISuccessResponse<T> | IErrorResponse

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// export const isErrorResponse = (response?: Api.IResponse<any>): response is Api.IErrorResponse => !response?.success;
