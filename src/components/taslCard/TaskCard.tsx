import { Typography } from "@mui/material";
import { Box, SxProps, Theme } from "@mui/system";
import { FC } from "react";
import { ITaskItem } from "../../store/types";
import { palette } from "../../theme/colors";

interface IProps {
    task: ITaskItem
    onClick(id: string): void
}

export const TaskCard: FC<IProps> = ({
    task,
    onClick
}) => {

    return (
        <Box sx={styles.root}
            onClick={() => {onClick(task.id)}}
        >
            <Typography variant='h6'
                sx={styles.taskTitle}
            >
                {task.title}
            </Typography>
            {task.description && (
                <Box sx={styles.descriptionRoot}>
                    <Typography variant={'body2'}>
                        {task.description}
                    </Typography>
                </Box>
            )}
        </Box>
    )
}

const styles = {
    root: {
        backgroundColor: 'common.white',
        padding: '20px',
        borderRadius: '4px',
        width: '100%',
        ":hover": {
            cursor: 'pointer',
        }
    } as SxProps<Theme>,
    taskTitle: {
        fontSize: '13px',
        lineHeight: '24px',
        fontWeight: '500',
        fontStyle: 'normal'
    } as SxProps<Theme>,
    descriptionRoot: {
        marginTop: '15px',
        borderTop: `1px solid ${palette.divider}`,
        paddingTop: '15px',

    } as SxProps<Theme>
}