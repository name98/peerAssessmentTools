
import { Box, SxProps, Theme } from "@mui/system";
import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { Logo } from "../logo";
import { Navbar } from "../navbar";
import { UserAcc } from "../userIco";

export const PrivateHeader: FC = () => {
    return (

        <Box sx={styles.container}>
            <Box sx={styles.root}>
                <Box sx={styles.logoContainer}>
                    <Logo />
                </Box>
                <Box sx={styles.rightItem}>
                    <Box>
                        <Navbar />
                    </Box>
                    <Box>
                        <UserAcc />
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

const styles = {
    container: {
        marginTop: '40px'
    } as SxProps<Theme>,
    root: {
        maxWidth: '1360px',
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    } as SxProps<Theme>,
    rightItem: {
        flex: '1 1 1088px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    } as SxProps<Theme>,

    logoContainer: {
        flex: '1 1 272px'  
    } as SxProps<Theme>

}