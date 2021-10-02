import { Button, TextField, Typography } from "@mui/material";
import { Box, SxProps, Theme } from "@mui/system";
import { FC, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { InputLabel } from "../../../../../components/inputLabel";
import { addCourse } from "../../../../../store/addCourse/thunks/addCourse";

interface ICourseItem {
    name: string
    subject: string
    description?: string
}

// interface IErrors extends Omit<ICourseItem, 'description'> { }
interface IErrors {
    name: string
    subject: string
}

export const AddCourseForm: FC = () => {
    const [course, setCourse] = useState<ICourseItem>(initialCourse)
    const [errors, setErrors] = useState<IErrors>(initialErrors)
    const dispatch = useAppDispatch()

    const onChangeCourse = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (typeof event.target !== 'undefined' && typeof event.target.name !== 'undefined' && typeof event.target.value !== 'undefined') {
            const { name, value } = event.target
            if (Object.keys(initialCourse).indexOf(name) > -1) {
                setCourse(prev => (
                    { ...prev, [name]: value }
                ))
                if (name === 'name' || name === 'subject') {
                    const error = validate(name, value)
                    if (errors[name] && error === "") {
                        setErrors(prev => (
                            { ...prev, [name]: error }
                        ))
                    }
                }
            }
        }
        console.log('Errors:', errors)
    }

    const onFieldBlur = (name: string, value: string) => {
        if (Object.keys(errors).indexOf(name) > -1) {
            const error = validate(name, value)
            if (error) {
                setErrors(prev => (
                    { ...prev, [name]: error }
                ))
            }
        }
    }

    const submitForm = useCallback((event: React.FormEvent<HTMLElement>) => {
        event.preventDefault()
        dispatch(addCourse(course))
    }, [dispatch])

    const validate = (name: string, value: string): string | undefined => {
        switch (name) {
            case 'name':
            case 'subject':
                return value ? "" : "Обязательное поле"
        }
    }

    return (
        <Box
            sx={styles.root}
            component={'form'}
            onSubmit={submitForm}
        >
            <Box sx={styles.formItemContainer}>
                <InputLabel
                    title={'Название'}
                    required
                />
                <TextField
                    name={'name'}
                    variant='outlined'
                    required
                    onChange={onChangeCourse}
                    value={course.name ? course.name : ''}
                    onBlur={e => onFieldBlur(e.target.name, e.target.value)}
                    {...(errors.name.length > 0 && { error: true, helperText: errors.name })}
                />
            </Box>

            <Box sx={styles.formItemContainer}>
                <InputLabel
                    title={'Дисциплина'}
                    required
                />
                <TextField
                    name={'subject'}
                    variant='outlined'
                    required
                    onChange={onChangeCourse}
                    value={course.subject ? course.subject : ''}
                    onBlur={e => onFieldBlur(e.target.name, e.target.value)}
                    {...(errors.subject.length > 0 && { error: true, helperText: errors.subject })}

                />
            </Box>
            <Box sx={styles.formItemContainer}>
                <InputLabel
                    title={'Описание'}
                />
                <TextField
                    name={'description'}
                    variant='outlined'
                    type={'text'}
                    rows={3}
                    multiline
                    onChange={onChangeCourse}
                    value={course.description ? course.description : ''}
                />
            </Box>
            <Box sx={styles.submitBt}>
                <Button
                    type='submit'
                    variant='contained'
                    // disabled={errors.name !== "" && errors.subject !== ""}
                >
                    Создать курс
                </Button>
            </Box>
        </Box>
    )
}

const styles = {
    root: {
        maxWidth: '548px'
    } as SxProps<Theme>,
    formItemContainer: {
        margin: '0px 0px 10px 0px',

    } as SxProps<Theme>,
    submitBt: {
        display: 'flex',
        justifyContent: 'flex-end',
    } as SxProps<Theme>,
}

const initialCourse: ICourseItem = {
    name: '',
    subject: '',
    description: ''
}

const initialErrors: IErrors = {
    name: '',
    subject: ''
}



