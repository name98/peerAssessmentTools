import { FC } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, CircularProgress, Dialog, DialogContent, DialogProps, DialogTitle, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/system';


interface IProps extends DialogProps {
    title: string
    onCloseHandler?(): void
    loading?: boolean
}

export const Popup: FC<IProps> = ({
    title,
    children,
    open: isOpen,
    onCloseHandler,
    loading,
    ...props
}) => {

    return (
        <Dialog
            open={isOpen}
            PaperProps={{ sx: styles.dialogWrapper }}
            {...props}
        >
            <DialogTitle>
                <Box sx={styles.topContainer}>
                    <Typography
                        variant='h4'
                    >
                        {title}
                    </Typography>
                    <Button
                        sx={styles.closeBt}
                        variant='contained'
                        onClick={onCloseHandler}
                    >
                        <CloseIcon sx={styles.closeIcon} />
                    </Button>
                </Box>
            </DialogTitle>

            <DialogContent
                dividers
                {...loading && ({ sx: styles.dialogContent })}
            >

                {children}
                {loading && (
                    <Box sx={styles.loadingBox}>
                        <CircularProgress />
                    </Box>
                )}
            </DialogContent>
        </Dialog>
    )
}

const styles = {

    dialogWrapper: {
        flex: '0 1 600px'

    } as SxProps<Theme>,
    topContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    } as SxProps<Theme>,
    closeBt: {
        backgroundColor: '#E5E7FB',
        transition: 'all 0.3s',
        padding: '5px',
        minWidth: '0px',
        ":hover": {
            backgroundColor: '#CCD1FF',
        }
    } as SxProps<Theme>,
    closeIcon: {
        color: theme => theme.palette.primary.main,

    } as SxProps<Theme>,
    loadingBox: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    } as SxProps<Theme>,
    dialogContent: {
        position: 'relative'
    } as SxProps<Theme>,
}

