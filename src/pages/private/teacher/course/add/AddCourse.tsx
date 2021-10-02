import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { Popup } from "../../../../../components/popup";
import { AddCourseForm } from "./AddCourseForm";
import { actions } from '../../../../../store/addCourse';
import { useNavigate, generatePath } from "react-router-dom";
import { paths } from "../../../../../app/constants/paths";

interface IProps {
    popupOpen: boolean
}

export const AddCourse: FC<IProps> = ({ popupOpen }) => {
    const dispatch = useAppDispatch()
    const loading = useAppSelector(state => state.newCourse.isLoading)
    const errorState = useAppSelector(state => state.newCourse.error)
    const payload = useAppSelector(state => state.newCourse.payload)
    const history = useNavigate()

    if (payload && payload.courseId) {
        console.log('Added', payload)
        history(generatePath(paths.teacher.courses.course, {courseId: payload.courseId}))
        dispatch(actions.courseSetInitialState())
        
    }

    return (
        <Popup
            title={'Создать курс'}
            open={popupOpen}
            loading={loading}
        >
            <AddCourseForm />
        </Popup>
    )
}