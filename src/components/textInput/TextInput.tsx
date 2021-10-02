import { BaseTextFieldProps, TextField, TextFieldProps } from "@mui/material"
import { SxProps, Theme } from "@mui/system"
import { FC } from "react"

interface IProps extends Omit<BaseTextFieldProps, 'variant'> {

}

export const TextInput: FC<IProps> = ({

    ...props

}) => {
    return (
        <TextField
            variant={'outlined'}
            
            sx={styles.root}
            {...props}
        />
    )
}

const styles = {
    root: {
        '& .MuiOutlinedInput-root': {
            fontFamily: "'Inter', sans-serif",
            color: theme => theme.palette.common.black,
            lineHeight: '26px',
            fontStyle: 'normal',
            fontSize: '14px',
            backgroundColor: theme => theme.palette.common.white,
            boxSizing: 'border-box',
            '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '5px',
                border: theme => `1px solid ${theme.palette.divider}`
            }
        },
        '& .MuiOutlinedInput-input': {
            padding: '18px 16px 16px 16px'
        },
        width: '100%'
        
    } as SxProps<Theme>,
}