import { Button, Typography } from "@mui/material"
import { Box, SxProps, Theme } from "@mui/system"
import { FC, useEffect, useState } from "react"
import { generatePath, useNavigate } from "react-router"
import { paths } from "../../../../../app/constants/paths"
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks"
import { CourseCard } from "../../../../../components/courseCard"
import List from "../../../../../components/list/List"
import { WorkBox } from "../../../../../components/workBox"
import { fetchCourses } from "../../../../../store/courses/thunks/courses"
import { AddCourse } from "../add"

export const TCourseList: FC = () => {
    const dispatch = useAppDispatch()
    const history = useNavigate()
    const isLoading = useAppSelector(state => state.courses.isLoading)
    const isLock = useAppSelector(state => state.courses.isLock)
    const error = useAppSelector(state => state.courses.error)
    const courses = useAppSelector(state => state.courses.payload)
    const [newCourse, setNewCourse] = useState(false)

    useEffect(() => {
        dispatch(fetchCourses())
        setNewCourse(false)
    }, [dispatch])

    const onAddNewCourse = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation()
        setNewCourse(prev => !prev)
    }

    const onCourse = (id: string) => {
        history(generatePath(
            paths.teacher.courses.course, { courseId: id }
        ))
    }

    return (<>
        <Box sx={styles.container}>
            <WorkBox
                error={error}
                isLoading={isLoading}
                isLock={isLock}
            >
                <Box sx={styles.topContainer}>
                    <Typography
                        variant='h6'
                        sx={styles.title}
                    >
                        Все курсы
                    </Typography>
                    <Button
                        variant='contained'
                        sx={styles.addBt}
                        onClick={onAddNewCourse}
                    >
                        Добавить
                    </Button>
                </Box>
                <Box sx={styles.root}>
                    {courses && (courses.length > 0) && (
                        <List
                            items={courses}
                            renderItems={
                                (course) => <CourseCard
                                    onCourseSelect={onCourse}
                                    key={course.id}
                                    course={course}
                                />
                            }
                        />
                    )}
                </Box>
            </WorkBox>
        </Box>
        <AddCourse popupOpen={newCourse} />
    </>)
}

const styles = {
    container: {
        maxWidth: '1371px',
        margin: '60px auto 20px auto',
    } as SxProps<Theme>,
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
    } as SxProps<Theme>,
    topContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0px 0px 20px 0px'
    } as SxProps<Theme>,
    title: {
        color: '#273AB5'
    } as SxProps<Theme>,
    addBt: {
        padding: '10px 30px 10px 10px',
        lineHeight: '1',
        position: 'relative',
        ":after": {
            content: '"+"',
            position: 'absolute',
            top: '0',
            right: '0',
            backgroundColor: theme => theme.palette.info.main,
            height: '100%',
            width: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            borderRadius: '0px 4px 4px 0px'
        }
    } as SxProps<Theme>,

}
