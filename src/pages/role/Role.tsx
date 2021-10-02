import { Button, Typography } from "@mui/material";
import { Box, SxProps, Theme } from "@mui/system";
import { FC } from "react";
import StudentImg from '../../img/role/teacher.svg';
import TeacherImg from '../../img/role/student.svg';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Navigate } from "react-router";
import { paths } from "../../app/constants/paths";
import { useLocation, useNavigate } from "react-router-dom";
import { IRole } from "../../store/types";
import { registretion } from "../../store/registretion/thunks/registration";

export const Role: FC = () => {
    console.log('role open')
    const location = useLocation()
    const history = useNavigate()
    const dispatch = useAppDispatch()

    const isRegistratered = useAppSelector(state => state.registration.isRegistered)
    const isRegistering = useAppSelector(state => state.registration.isRegistering)
    const error = useAppSelector(state => state.registration.error)

    const registrationProps = useAppSelector(state => state.registration.registraionProps)

    const handleSelectRole = (role: IRole) => {
        if (registrationProps) {
            dispatch(registretion({
                ...registrationProps, role: role
            }))
        }
    }
    if (!registrationProps) {
        return (
            <Navigate
                to={paths.login}
                replace={true}
                state={{
                    from: location
                }}
            />
        )
    }

    return (
        //container
        <Box sx={styles.container}>
            {/* root */}
            <Box sx={styles.root}>
                {/* teacher */}
                <Box sx={styles.cardContainer}>
                    <Typography variant='h4' >
                        Преподаватель
                    </Typography>
                    <img src={TeacherImg} alt='Teacher' style={{ height: '200px' }} />
                    <Button variant='contained'
                        sx={styles.selectButton}
                        onClick={() => { handleSelectRole('teacher') }}
                    >
                        Я преподаватель
                    </Button>
                </Box>

                {/* student */}
                <Box sx={styles.cardContainer}>
                    <Typography variant='h4' >
                        Студент
                    </Typography>
                    <img src={StudentImg} alt='Teacher' style={{ height: '200px' }} />
                    <Button variant='outlined'
                        sx={styles.selectButton}
                        onClick={() => { handleSelectRole('student') }}
                    >
                        Я студент
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

const styles = {
    root: {
        maxWidth: '600px',
        display: 'flex',
        backgroundColor: 'transparent'
    } as SxProps<Theme>,
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        textAlign: 'center',
    } as SxProps<Theme>,
    cardContainer: {
        backgroundColor: theme => theme.palette.common.white,
        borderRadius: '4px',
        m: '10px',
        p: '20px',
        transition: 'all 0.3s ease 0s',
        'img': {
            marginTop: '30px'
        },
        ':hover': {
            cursor: 'pointer',
            boxShadow: '0px 0px 12px -3px rgba(34, 60, 80, 0.2)',

        }
    } as SxProps<Theme>,
    selectButton: {
        marginTop: '20px',
        width: '100%'
    } as SxProps<Theme>,
}