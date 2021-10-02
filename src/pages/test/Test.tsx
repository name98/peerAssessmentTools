import { Button, CircularProgress } from "@mui/material";
import { Box, SxProps, Theme } from "@mui/system";
import { FC, useState } from "react";
import { CourseCard } from "../../components/courseCard";
import { Popup } from "../../components/popup";
import { WorkBox } from "../../components/workBox";
import { Wrapper } from "../../components/wrapper";
import { AddCourseForm } from "../private/teacher/course/add/AddCourseForm";
import { CourseMain } from "../private/teacher/course/main";


export const TestPage: FC = () => {
    const fakeData = {
        id: '1',
        adminName: 'Мухаммад Юсупов gahsghagshgahsghagshagshgh',
        name: 'AngularJS ahsjhajsh ashajshjas tgtgtgtg',
        subject: 'Web Devolepment Front Front',
        description: "Master Angular 5 from the basics to building an advanced application with Firebase's Firestore as well sas ha sghgasg ahsgahsgh"
    }
    const [isopen, setOpen] = useState(false)
    return (
        <Wrapper>
            <CourseMain />
        </Wrapper>
    )
}

const styles = {
    boxCon: {
        backdropFilter: 'blur(2px)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '200px',
        height: '200px'
    } as SxProps<Theme>
}