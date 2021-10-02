import { Typography } from "@mui/material";
import { SxProps, Theme, TypographyProps } from "@mui/system";
import { FC } from "react";
import { palette } from "../../theme/colors";

interface IProps extends TypographyProps {
    title: string
    required?: boolean
}

export const InputLabel: FC<IProps> = ({
    title,
    required
}) => {
    return (
        <Typography variant='body1'
            sx={required ? {...styles.root, ...styles.required} : styles.root}
        >
            {title}
        </Typography>
    )
}

const styles = {
    root: {
        fontWeight: '600',
        lineHeight: '17px',
        color: theme => theme.palette.common.black,
        textAlign: 'left',
        marginBottom: '12px',
        
    } as SxProps<Theme>,
    required: {
        padding: '0px 10px 0px 0px',
        position: 'relative',
        display: 'inline-block',
        ":after": {
            content: "'*'",
            position: 'absolute',
            right: '0',
            top: '2px',
            lineHeight: '1',
            color: palette.fill.grey
        }
        
    } as SxProps<Theme>,
}