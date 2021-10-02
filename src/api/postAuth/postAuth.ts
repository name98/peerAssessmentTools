import { AxiosRequestConfig } from 'axios'
import { IRequestData, IResponseData } from '.'
import { api, IResponse } from '..'
import { mock } from './mock'


export const postAuth = async (payload: IRequestData): Promise<IResponse<IResponseData>> => {

  const isMock = true

  const requestConfig: AxiosRequestConfig = {
    method: 'POST',
    url: `/api/v1/users`,
    headers: {
      'Authorization': `Bearer 'no access token'`,
      'Accept-Language': 'ru',
    },
    data: payload,
  }

  if (isMock) {
    const response = await mock(requestConfig)
    return response
  }


  const response = await api.request<IResponse<IResponseData>>(requestConfig)
  return response.data
}
