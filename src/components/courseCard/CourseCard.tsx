import { Typography } from "@mui/material";
import { Box, SxProps, Theme } from "@mui/system";
import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import SettingsIco from '../../img/ico/setting-hover.svg'
import DefaultAvatar from '../../img/ico/avatar.svg'
import { palette } from "../../theme/colors";
import { ICourses } from "../../store/types";

interface IProps {
    course: ICourses
    onCourseSelect(id: string): void
}

export const CourseCard: FC<IProps> = ({
    course,
    onCourseSelect
}) => {
    

    const userProfile = useAppSelector(state => state.userProfile.payload)
    


    return (
        <Box sx={styles.root}
            onClick={() => onCourseSelect(course.id)}
        >
            <Box sx={styles.containerTop}>
                <Box sx={styles.topContainer}>
                    <Typography sx={styles.subjectText}>
                        {course.subject}
                    </Typography>
                    {userProfile && userProfile.role === 'teacher' && (
                        <Box sx={styles.settingBt}>
                            <img src={SettingsIco} alt="Settings"/>
                        </Box>
                    )}
                </Box>
                <Typography sx={styles.courseTitle}>
                    {course.name}
                </Typography>
                <Box sx={styles.courseDescriptionContainer}>
                    <Typography sx={styles.courseDescription}>
                        {course.description ? course.description : 'Нет описания'}
                    </Typography>
                </Box>
            </Box>

            <Box sx={styles.containerFooter}>
                <Box sx={styles.containerFooterWrapper}>
                    <img style={styles.avatar} src={course.adminImageUrl ? course.adminImageUrl : DefaultAvatar} alt="Admin" />
                    <Typography sx={styles.adminName}>
                        {course.adminName}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

const styles = {
    root: {
        backgroundColor: theme => theme.palette.common.white,
        borderRadius: '4px',
        borderLeft: theme => `3px solid ${theme.palette.primary.main}`,
        width: '255px',
        transition: 'all 0.3s',
        ":hover": {
            cursor: 'pointer',
            boxShadow: '0px 0px 7px 1px rgba(34, 60, 80, 0.2)'
        }
    } as SxProps<Theme>,
    containerTop: {
        padding: '14px 20px 20px 17px',
        borderBottom: 'solid 0.68px #EDEEFF',
    } as SxProps<Theme>,
    topContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right'

    } as SxProps<Theme>,
    subjectText: {
        color: theme => theme.palette.primary.main,
        backgroundColor: '#EBECFC',
        borderRadius: '4px',
        padding: '6px 9px',
        fontSize: '13px',
        lineHeight: '12px',
        fontWeight: '500',
        maxWidth: '180px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    } as SxProps<Theme>,
    settingBt: {
        ":hover": {
            cursor: 'pointer',
            borderColor: palette.fill.greyLight
        },
        borderRadius: '4px',
        border: theme => `1px solid ${theme.palette.common.white}`,
        marginLeft: '11px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2px'

    } as SxProps<Theme>,
    courseTitle: {
        color: theme => theme.palette.common.black,
        fontWeight: '500',
        fontSize: '13px',
        lineHeight: '24px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: '0px 0px 11px 0px',
        margin: '12px 0px 0px 0px',
        position: 'relative',
        ":after": {
            content: "''",
            position: 'absolute',
            bottom: '0',
            left: '0',
            display: 'block',
            height: '1px',
            width: '15px',
            backgroundColor: '#2DCA8C',
        }
    } as SxProps<Theme>,
    courseDescription:{
        color: palette.fill.grey,
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '24px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        maxHeight: '100%'
    } as SxProps<Theme>,
    courseDescriptionContainer: {
        height: '72px',    
        margin: '10px 0px 0px 0px',
    } as SxProps<Theme>,
    containerFooter: {
        margin: '0px 20px 0px 17px',
        display: 'flex',
        height: '43px',
        alignItems: 'center'
    } as SxProps<Theme>,
    containerFooterWrapper: {
        display: 'flex',
        alignItems: 'center',
    } as SxProps<Theme>,
    avatar: {
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        margin: '0px 10px 0px 0px'    
    },
    adminName: {
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '1',
        color: theme => theme.palette.common.black,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        flexBasis: '183px',
        flexShrink: '1',
        flexFlow: '0'
    } as SxProps<Theme>,
}