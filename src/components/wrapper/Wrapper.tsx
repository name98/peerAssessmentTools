import { SxProps } from '@mui/system';
import { Box, Theme } from "@mui/material";

import { FC } from "react";
import { palette } from '../../theme/colors';


export const Wrapper: FC = ({
    children
}) => {
    return (
        <Box sx={styles.root}>
            {children}
        </Box>
    )
}

const styles = {
    root: {
        position: 'absolute',
        width: '100%',
        minHeight: '100%',
        zIndex: '-100',
        top: 0,
        left: 0,
        backgroundColor: palette.containerBg.light
    } as SxProps<Theme>,
}
