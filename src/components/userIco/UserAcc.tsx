import { Box, SxProps, Theme } from "@mui/system";
import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import Avatar from '../../img/ico/avatar.svg'

export const UserAcc: FC = () => {

    const payload = useAppSelector(state => state.userProfile.payload)
    
    return (
        <Box>
            <Box sx={{...styles.avatarImage, backgroundImage: `url(${payload?.imageUrl ? payload.imageUrl : Avatar})`}}/>
        </Box>
    )
}

const styles = {
    avatarImage: {
        height: '50px',
        width: '50px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundSepeat: 'no-repeat',
        position: 'relative',
        borderRadius: '50%',
        ':hover': {
            cursor: 'pointer',
        }
    } as SxProps<Theme>,
}
