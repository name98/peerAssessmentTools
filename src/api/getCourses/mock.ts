import { AxiosRequestConfig } from 'axios'
import { IResponseData } from '.'
import { delay, IResponse } from '..'


export const mock = async (requestConfig: AxiosRequestConfig): Promise<IResponse<IResponseData>> => {
  await delay(500)

  return {
    success: true,
    payload: [
      {
        id: '1',
        adminName: 'Brad Traversy',
        name: 'Решение уравнений',
        subject: 'Математика',
        description: "Master Angular 5 from the basics to building an advanced application with Firebase's Firestore as well"
      },
      {
        id: '2',
        adminName: 'Janice Carroll',
        name: 'Codeigniter',
        subject: 'English',
        description: "Learn Php Codeigniter and understand working with MVC and HMVC from zero to hero",
        adminImageUrl: 'https://lh3.googleusercontent.com/a/AATXAJz60re4_yKB3-clBNjRz_cnx9X_qX2BBR3koRjF=s96-c'
      },
      {
        id: '3',
        adminName: 'JuanD MeGon',
        name: 'NodeJS',
        subject: 'English',
        description: "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills"
      },
      {
        id: '4',
        adminName: 'Anthony Alicea',
        name: 'Laravel',
        subject: 'English',
        description: "Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more."
      },
      {
        id: '5',
        adminName: 'Sara Perkins',
        name: 'Sketch',
        subject: 'English',
        description: "Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A to Z."
      },
      {
        id: '6',
        adminName: 'Brad Traversy',
        name: 'Bootstrap',
        subject: 'English',
        description: "This tutorial has been prepared for anyone who has a basic knowledge of HTML and CSS to develop"
      },
      {
        id: '7',
        adminName: 'Sara Perkins',
        name: 'Firebase',
        subject: 'English',
        description: "Full-stack Development with Angular 8, Firestore, Firebase Storage & Hosting, Firebase Cloud Functio"
      },
      {
        id: '8',
        adminName: 'Brad Traversy',
        name: 'Решение уравнений',
        subject: 'Математика',
        description: "Master Angular 5 from the basics to building an advanced application with Firebase's Firestore as well"
      },
      {
        id: '9',
        adminName: 'Janice Carroll',
        name: 'Codeigniter',
        subject: 'English',
        description: "Learn Php Codeigniter and understand working with MVC and HMVC from zero to hero"
      },
      {
        id: '10',
        adminName: 'JuanD MeGon',
        name: 'NodeJS',
        subject: 'English',
        description: "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills"
      },
      {
        id: '11',
        adminName: 'Anthony Alicea',
        name: 'Laravel',
        subject: 'English',
        description: "Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more."
      },
      {
        id: '12',
        adminName: 'Sara Perkins',
        name: 'Sketch',
        subject: 'English',
        description: "Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A to Z."
      },
      {
        id: '13',
        adminName: 'Brad Traversy',
        name: 'Bootstrap',
        subject: 'English',
        description: "This tutorial has been prepared for anyone who has a basic knowledge of HTML and CSS to develop"
      },
      {
        id: '14',
        adminName: 'Sara Perkins',
        name: 'Firebase',
        subject: 'English',
        description: "Full-stack Development with Angular 8, Firestore, Firebase Storage & Hosting, Firebase Cloud Functio"
      },
      {
        id: '15',
        adminName: 'Brad Traversy',
        name: 'Решение уравнений',
        subject: 'Математика',
        description: "Master Angular 5 from the basics to building an advanced application with Firebase's Firestore as well"
      },
      {
        id: '25',
        adminName: 'Janice Carroll',
        name: 'Codeigniter',
        subject: 'English',
        description: "Learn Php Codeigniter and understand working with MVC and HMVC from zero to hero"
      },
      {
        id: '35',
        adminName: 'JuanD MeGon',
        name: 'NodeJS',
        subject: 'English',
        description: "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills"
      },
      {
        id: '45',
        adminName: 'Anthony Alicea',
        name: 'Laravel',
        subject: 'English',
        description: "Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more."
      },
      {
        id: '55',
        adminName: 'Sara Perkins',
        name: 'Sketch',
        subject: 'English',
        description: "Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A to Z."
      },
      {
        id: '65',
        adminName: 'Brad Traversy',
        name: 'Bootstrap',
        subject: 'English',
        description: "This tutorial has been prepared for anyone who has a basic knowledge of HTML and CSS to develop"
      },
      {
        id: '75',
        adminName: 'Sara Perkins',
        name: 'Firebase',
        subject: 'English',
        description: "Full-stack Development with Angular 8, Firestore, Firebase Storage & Hosting, Firebase Cloud Functio"
      },
      {
        id: '85',
        adminName: 'Brad Traversy',
        name: 'Решение уравнений',
        subject: 'Математика',
        description: "Master Angular 5 from the basics to building an advanced application with Firebase's Firestore as well"
      },
      {
        id: '95',
        adminName: 'Janice Carroll',
        name: 'Codeigniter',
        subject: 'English',
        description: "Learn Php Codeigniter and understand working with MVC and HMVC from zero to hero"
      },
      {
        id: '105',
        adminName: 'JuanD MeGon',
        name: 'NodeJS',
        subject: 'English',
        description: "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills"
      },
      {
        id: '115',
        adminName: 'Anthony Alicea',
        name: 'Laravel',
        subject: 'English',
        description: "Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more."
      },
      {
        id: '125',
        adminName: 'Sara Perkins',
        name: 'Sketch',
        subject: 'English',
        description: "Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A to Z."
      },
      {
        id: '135',
        adminName: 'Brad Traversy',
        name: 'Bootstrap',
        subject: 'English',
        description: "This tutorial has been prepared for anyone who has a basic knowledge of HTML and CSS to develop"
      },
      {
        id: '145',
        adminName: 'Sara Perkins',
        name: 'Firebase',
        subject: 'English',
        description: "Full-stack Development with Angular 8, Firestore, Firebase Storage & Hosting, Firebase Cloud Functio"
      },
    ]
  }
}
