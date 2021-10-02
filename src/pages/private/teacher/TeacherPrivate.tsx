import { Routes, Route, Navigate, generatePath } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { usePrivatePathT } from '../../../app/hooks/usePrivatePathT'
import { paths } from '../../../app/constants/paths'
import { Box } from '@mui/system'
import { Wrapper } from '../../../components/wrapper'
import { TCourseList as CourseList } from './course/list'
import { CourseMain } from './course/main'



export function TeacherPrivate() {
    const dispatch = useAppDispatch()
    console.log('Teacher private')
    const {
        location,
        path
    } = usePrivatePathT()


    const isAuthorized = useAppSelector(state => state.auth.isAuthorized)
    const authPayload = useAppSelector(state => state.auth.payload)

    if (!isAuthorized || !authPayload.accessToken) {
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

    if (location.pathname === '/t' || location.pathname === paths.registration.selectRole) {
        return (
            <Navigate
                to={paths.teacher.main}
                replace
                state={{
                    from: location
                }}
            />
        )
    }

    return (
        <Box>
            <Routes>
                <Route path={paths.teacher.main} element={<CourseList />} />
                <Route path={paths.teacher.courses.course} element={<CourseMain />} />
                {/* выбор пирингового задания */}
            </Routes>
        </Box>

    )
}