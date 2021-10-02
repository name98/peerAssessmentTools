import { Typography } from "@mui/material"
import { Box, Theme } from "@mui/system"
import { FC } from "react"
import logo from "../../img/logo.svg"
import { SxProps } from '@mui/system';

export const Logo: FC = () => {
    return (
        <Box sx={styles.root} >
            <img src={logo} alt="Peer Assessment Tools" />
            <Typography variant='h4'>
                Peer Assessment Tools
            </Typography>
        </Box>
    )
}

const styles = {
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        'img': {
            marginRight: '18.66px'
        }
    } as SxProps<Theme>,
}
