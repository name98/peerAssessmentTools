import { AxiosRequestConfig } from 'axios'
import { IRequestData, IResponseData } from '.'
import { api, IResponse } from '..'
import { INewCourseRequest } from '../../store/types'
import { mock } from './mock'


export const postNewCourse = async (payload: IRequestData): Promise<IResponse<IResponseData>> => {

  const isMock = true

  const requestConfig: AxiosRequestConfig = {
    method: 'POST',
    url: `/api/v1/add-course`,
    headers: {
      'Authorization': `Bearer ${payload.accessToken}`,
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
