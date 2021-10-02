import { Routes, Route, Navigate, useLocation, RouteProps } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { paths } from '../../app/constants/paths'
import { TeacherPrivate } from './teacher/TeacherPrivate'
import { StudentPrivate } from './student/StudentPrivate'
import { PrivateHeader } from '../../components/header'
import { useEffect } from 'react'
import { fetchUserProfile } from '../../store/userProfile'
import { Role } from '../role'
import { Registration } from './registration'




export function Private() {
  console.log("Private run")
  const location = useLocation()
  const dispatch = useAppDispatch()

  const isAuthorized = useAppSelector(state => state.auth.isAuthorized)
  const authPayload = useAppSelector(state => state.auth.payload)
  const registrationProps = useAppSelector(state => state.registration.registraionProps)
  const isRegistered = useAppSelector(state => state.registration.isRegistered)
  useEffect(() => {
    if (authPayload?.accessToken) {
      dispatch(fetchUserProfile())
      console.log('Get user profile...s')
    }
  }, [dispatch, authPayload.accessToken])

  const userProfilePayload = useAppSelector(state => state.userProfile.payload)
  const userProfileIsLoading = useAppSelector(state => state.userProfile.isLoading)
  console.log(authPayload, 'auth')
  console.log(registrationProps?.email)
  useEffect(()=>{
    if (authPayload && authPayload.accessToken){
      fetchUserProfile()
    }
  }, [dispatch, authPayload])
  if ((!isAuthorized || !authPayload.accessToken) && !registrationProps?.email) {
    console.log('Navigate to login')
    return (
      <Navigate
        to={paths.login}
        replace
        state={{
          from: location
        }}
      />
    )
  }
 

  if (!userProfileIsLoading && userProfilePayload?.role === 'teacher') {
    console.log('Private route return teacher Route')
    return (<>
      <PrivateHeader />
      <Routes>
        <PrivateRoute path='*' element={<TeacherPrivate />} />
      </Routes>
    </>
    )
  }

  if (!userProfileIsLoading && userProfilePayload?.role === 'student') {
    console.log('Private route return student Route')
    return (<>
      <PrivateHeader />
      <Routes>
        <PrivateRoute path='*' element={<StudentPrivate />} />
      </Routes>
    </>)
  }
  console.log('Private route return null')
  return (
    <Routes>
      <PrivateRoute path={paths.registration.main} element={<Registration />} />
      <PrivateRoute path={paths.registration.selectRole} element={<Role />} />
    </Routes>
  )
}

function PrivateRoute(props: RouteProps): React.ReactElement {
  return (
    <Route {...props} />
  )
}

