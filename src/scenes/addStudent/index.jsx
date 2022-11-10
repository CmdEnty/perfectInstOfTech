import React from 'react'
import StudentFormTab from '../../components/studentFormTab';
import Header from "../../components/Header";
import { Box } from '@mui/material';
import ColorTabs from '../global/ColoredTab';
import { useState } from "react";

function AddStudent() {
   const [student, setStudent] = useState({
  selectedValue: "",
  surName: "",
  fastName: "",
  middleName: "",
  selectedGender: "",
  idNo: "",
  selectedNationality: "",
  nationality: "N/A",
  stateSelectedValue: "",
  stateSurName: "",
  stateFastName: "",
  stateMiddleName: "",
  stateSelectedGender: "",
  stateStudentIdNo: "",
  stateStudentSelectedNationality: "",
  stateStudentNationality: "N/A",
  stateSelectedSpecialNeeds: "",
  stateCourse: "",
  statePlaceOfBirth: "",
  stateDOB: "",
  stateCounty: "",
  stateStudentLocation: "",
  stateStudentPhone: "",
  stateMaritalStatus: "",
  stateSpecialNeeds: "N/A",
  stateFullName: "",
  stateLocation: "",
  statePhone: "",
  stateEmail: "",
  stateSelectedNationality: "",
  statePassportNumber: "N/A",
  stateNationality: "N/Aaaaaaaaaaa",
  stateIdNo: "N/A",
  });

  const handleFormChange = (values) => {
    setStudent({ ...student, ...values})
  }
  // alert(student.nationality)

  return (
    <>
    <Box m="30px">
      <Header title="REGISTER STUDENT" subtitle="Registration Form" />
     </Box>
    <Box m="20px">
      <ColorTabs value="two"/>
     </Box>
    <StudentFormTab student={student} handleFormChange={handleFormChange}/>
    </>
  )
}

export default AddStudent