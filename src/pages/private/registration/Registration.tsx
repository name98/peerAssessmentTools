import { FC } from "react";
import { Navigate } from "react-router";
import { paths } from "../../../app/constants/paths";
import { useAppSelector } from "../../../app/hooks";

export const Registration: FC = () => {
    const gAuthState = useAppSelector(state => state.gAuth.payload.userState)
    const registrationProps = useAppSelector(state => state.registration.registraionProps)

    if (gAuthState === 'NEW' && registrationProps?.email){
        return (
            <Navigate 
                to={paths.registration.selectRole}
                replace
            />
        )
    }
    
    console.log('registretion return null')
    return null
}