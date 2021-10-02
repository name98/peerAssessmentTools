import { AxiosRequestConfig } from 'axios'
import { IResponseData } from '.'
import { delay, IResponse } from '..'
import { ITaskItem } from '../../store/types'


export const mock = async (requestConfig: AxiosRequestConfig): Promise<IResponse<IResponseData>> => {
  await delay(500)

  return {
    success: true,
    payload: [
      {
        id: '1',
        title: 'Html Introduction',
        description: 'The primary goal of this quick start guide is to introduce you to Unreal Engine 4`s (UE4) development environment. By the end of this guide, you`ll know how to set up and develop C++ Projects in UE4. This guide shows you how to create a new Unreal Engine project, add a new C++ class to it, compile the project, and add an instance of a new class to your level. By the time you reach the end of this guide, you`ll be able to see your programmed Actor floating above a table in the level',

      },
      {
        id: '2',
        title: 'Some Special Tags',
        description: 'The primary goal of this quick start guide is to introduce you to Unreal Engine 4`s (UE4) development environment. By the end of this guide, you`ll know how to set up and develop C++ Projects in UE4. This guide shows you how to create a new Unreal Engine project, add a new C++ class to it, compile the project, and add an instance of a new class to your level. By the time you reach the end of this guide, you`ll be able to see your programmed Actor floating above a table in the level',

      },
      {
        id: '3',
        title: 'Your First webpage',

      },
      {
        id: '4',
        title: 'Bootstrap Introduction',
        description: 'The primary goal of this quick start guide is to introduce you to Unreal Engine 4`s (UE4) development environment. By the end of this guide, you`ll know how to set up and develop C++ Projects in UE4. This guide shows you how to create a new Unreal Engine project, add a new C++ class to it, compile the project, and add an instance of a new class to your level. By the time you reach the end of this guide, you`ll be able to see your programmed Actor floating above a table in the level',

      }
    ] as Array<ITaskItem>
  }
}
