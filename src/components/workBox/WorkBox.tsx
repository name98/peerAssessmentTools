import { CircularProgress, Slide } from "@mui/material";
import { Box, SxProps, Theme } from "@mui/system";
import { FC } from "react";
import { IError } from "../../store/types";

interface IProps {
    error?: IError
    isLoading: boolean
    isLock?: boolean
}

export const WorkBox: FC<IProps> = ({
    error,
    isLoading,
    isLock,
    children
}) => {
    if (!isLoading && !error && (isLock === undefined || (isLock === false)) && children) {
        return (
            <Slide direction='up' in={true}>
                <Box>{children}</Box>                
            </Slide>
        )
    }
    if (isLoading) {
        return (
            <Box sx={styles.root}>
                <CircularProgress sx={styles.progress} />
            </Box>
        )
    }
    return null
}

const styles = {
    progress: {
        color: theme => theme.palette.primary.main,
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    } as SxProps<Theme>,
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    } as SxProps<Theme>,
}