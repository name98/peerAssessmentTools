import { Routes, Route, Navigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { paths } from '../../../app/constants/paths'
import { Box } from '@mui/system'
import { Wrapper } from '../../../components/wrapper'
import { usePrivatePathSt } from '../../../app/hooks/usePrivatePathSt'




export function StudentPrivate() {
    const dispatch = useAppDispatch()

    const {
        location
        // path,
        // navigateProps,
    } = usePrivatePathSt()


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

    if (location.pathname === '/st' || location.pathname === paths.registration.selectRole) {
        return (
            <Navigate
                to={paths.student.main}
                replace
                state={{
                    from: location
                }}
            />
        )
    }

    // if (authPayload.role !== 'student') {
    //     return (
    //         <Navigate
    //             to={paths.student.main}
    //             replace
    //             state={{
    //                 from: location
    //             }}
    //         />
    //     )
    // }

    return (
        <Box>
            <Routes>
                <Route path={paths.student.main} element={<></>} />
            </Routes>
        </Box>

    )
}