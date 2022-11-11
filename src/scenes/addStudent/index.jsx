import React from 'react'
import StudentFormTab from '../../components/studentFormTab';
import Header from "../../components/Header";
import { Box } from '@mui/material';
import ColorTabs from '../global/ColoredTab';
import { useState } from "react";

function AddStudent() {
   const [student, setStudent] = useState({
  selectedValue: "",
  form1Submitted: "",
  surName: "",
  fastName: "",
  middleName: "",
  selectedGender: "",
  idNo: "",
  selectedNationality: "",
  nationality: "N/A",

  form2Submitted: "",
  selectedSpecialNeeds: "",
  course: "",
  placeOfBirth: "",
  DOB: "",
  county: "",
  location: "",
  phone: "",
  
  maritalStatus: "",
  specialNeeds: "N/A",
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