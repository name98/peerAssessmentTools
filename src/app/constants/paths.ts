export const paths = {
  root: '/',
  login: '/login',
  notFound: '/404', // TODO

  registration: {
    main: '/registration',
    selectRole: '/registration/select-role'

  },
  teacher: {
    main: '/t/course',
    courses: {  
      course: '/t/course/:courseId/main'
    },
    task: {
      main: '/t/course/:courseId/task/:taskId/main'
    }
    
  },
  student: {
    main: '/st/course',
    courses: {  
      course: '/st/course/:courseId/main'
    },
  }
}
