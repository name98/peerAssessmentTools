import { AxiosRequestConfig } from 'axios'
import { IResponseData } from '.'
import { delay, IResponse } from '..'


export const mock = async (requestConfig: AxiosRequestConfig): Promise<IResponse<IResponseData>> => {
  await delay(500)

  return {
    success: true,
    payload: {
      firstName: 'Test',
      lastName: 'User',
      imageUrl: 'https://lh3.googleusercontent.com/a/AATXAJz60re4_yKB3-clBNjRz_cnx9X_qX2BBR3koRjF=s96-c',
      role: 'teacher',
      email: 'test@test.ru',
      
    }
  }
}
