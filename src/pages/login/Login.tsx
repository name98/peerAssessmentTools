import { Button, Checkbox, TextField, Typography } from '@mui/material';
import { Box, Theme } from '@mui/system';
import { FC} from 'react';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { Logo } from '../../components/logo';
import clientID from '../../secret/GoogleClientID';
import { SxProps } from '@mui/system';
import { palette } from '../../theme/colors';
import { TextInput } from '../../components/textInput';
import GoogleLogo from '../../img/google-logo.svg'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Navigate } from 'react-router-dom'
import { paths } from '../../app/constants/paths';
import { fetchGAuth } from '../../store/googleAuth/thunks/googleAuth';

interface IGoogleResponse {
    email: string,
    gAccessToken?: string,
    pass?: string,
    imageUrl?: string,
    firstName: string,
    lastName: string
}


export const Login: FC = () => {
    const dispatch = useAppDispatch()

    const gIsAuthorized = useAppSelector(state => state.gAuth.isAuthorized)
    const gIsAuthorizing = useAppSelector(state => state.gAuth.isAuthorizing)
    const gPayload = useAppSelector(state => state.gAuth.payload)

    const onGoogleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if ('accessToken' in response) {
            console.log(response.profileObj, "Google response")
            console.log(response.accessToken, 'Google access token')
            dispatch(fetchGAuth({
                email: response.profileObj.email,
                gAccessToken: response.accessToken,
                imageUrl: response.profileObj.imageUrl.toString(),
                firstName: response.profileObj.givenName,
                lastName: response.profileObj.familyName
            }))
        }
    }

    const onGoogleLoginFail = (e: any) => {
        console.log(e.error)
    }

    if (gIsAuthorized && gPayload.userState === 'NEW') {
        return (
            <Navigate
                to={paths.registration.main}
                replace
            />
        )
    }

    return (
        <Box sx={styles.container}>
            <Box sx={styles.root}>
                <Logo />
                <Box sx={styles.headingTitle}>
                    <Typography variant='h4'>
                        Вход
                    </Typography>
                    <Typography variant='body1'>
                        Пожалуйста, войдите в систему, чтобы получить доступ ко всем функциям
                    </Typography>
                </Box>
                <GoogleLogin
                    clientId={clientID}
                    render={renderProps => (
                        <Button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            startIcon={
                                <img src={GoogleLogo} alt='' />
                            }
                            variant='outlined'
                            sx={{ width: '100%' }}
                        >
                            Войти через Google
                        </Button>
                    )}
                    onSuccess={onGoogleLoginSuccess}
                    onFailure={onGoogleLoginFail}
                    cookiePolicy={'single_host_origin'}
                />
                <Box sx={styles.orSeperate}>
                    <span />
                    <Typography variant='body1'
                        sx={{ textTransform: 'uppercase', mx: '24px' }}
                    >
                        или
                    </Typography>
                    <span />
                </Box>
                <Box component='form'>
                    <Box sx={styles.formItemContainer}>
                        <Typography variant='body1'
                            sx={styles.textFieldTitle}
                        >
                            E-mail
                        </Typography>
                        <TextField
                            variant='outlined'
                            type={'email'}
                            placeholder={'e.g example@mail.com'}
                        />
                    </Box>
                    <Box sx={styles.formItemContainer}>
                        <Typography variant='body1'
                            sx={styles.textFieldTitle}
                        >
                            Пароль
                        </Typography>
                        <TextField
                            variant='outlined'
                            type={'password'}
                            placeholder={'Ваш пароль'}
                        />
                    </Box>
                    <Box sx={styles.keepSignIn}>
                        <Checkbox />
                        <Typography
                            sx={styles.keepMeText}
                        >
                            Запомнить меня
                        </Typography>
                        <Typography
                            variant='button'
                            sx={{ flex: '1 0 auto' }}
                        >
                            Забыли пароль
                        </Typography>
                    </Box>
                    <Button variant='contained'
                        sx={{ width: '100%' }}
                    >
                        Войти
                    </Button>
                    <Typography variant='body1'
                        sx={{ lineHeight: '26px', marginTop: '18px' }}
                    >
                        Нет учетной записи?
                        <Typography variant='button'
                            sx={{
                                lineHeight: '26px',
                                fontWeight: 600,
                                color: "#2F3CED",
                                paddingLeft: '10px'
                            }}
                        >
                            Зарегистрироваться
                        </Typography>

                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position: 'absolute',
        width: '100%'
    } as SxProps<Theme>,
    root: {
        position: 'relative',
        maxWidth: '548px',
        backgroundColor: theme => theme.palette.common.white,
        py: '40px',
        px: '50px',
        textAlign: 'center',
        borderRadius: '4px'
    } as SxProps<Theme>,
    headingTitle: {
        marginTop: '31.14px',
        textAlign: 'left',
        marginBottom: '28px'
    } as SxProps<Theme>,
    orSeperate: {
        display: 'flex',
        alignItems: 'center',
        my: '20px',
        'span': {
            display: 'block',
            height: '1px',
            flex: "1 1 100%",
            backgroundColor: palette.divider
        }
    } as SxProps<Theme>,
    textFieldTitle: {
        fontWeight: '600',
        lineHeight: '17px',
        color: theme => theme.palette.common.black,
        textAlign: 'left',
        marginBottom: '12px'
    } as SxProps<Theme>,
    formItemContainer: {
        marginBottom: '22px'
    } as SxProps<Theme>,
    keepSignIn: {
        marginBottom: '32px',
        display: 'flex',
        alignItems: 'center',
        "& .MuiCheckbox-root": {
            marginRight: '10px'
        }
    } as SxProps<Theme>,
    keepMeText: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '22px',
        color: '#657297',
        flex: '0 1 100%',
        textAlign: 'left'
    } as SxProps<Theme>

}
