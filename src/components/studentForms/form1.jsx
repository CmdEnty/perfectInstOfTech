import * as React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import ColorRadioButtons from '../radio_btn';
const Form1 = (props) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [selectedValue, setSelectedValue] = React.useState();
  const [selectedGender, setSelectedGender] = React.useState();
  const [selectedNationality, setSelectedNationality] = React.useState();
  
  let submitted;
  const handleFormSubmit = (values) => {
    submitted = 1;
    // e.preventDefault();
    props.handleFormChange(values);
     props.handlePage();
  };
  const valueGet = (val) => {
    setSelectedValue(val);
  }

    const valueGetGender = (val) => {
    setSelectedGender(val);
  }

  const valueGetNationality = (val) => {

    setSelectedNationality(val);
  }

  return (
    <>
    <Box m="100px" mt="15px">

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            {submitted === 1 }
            <Box
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(6, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
              }}
            >
                <Box sx={{ gridColumn: "span 7" }}
                >
                <ColorRadioButtons
                name='selectedValue'
                value={values.selectedValue}
                onBlur={handleBlur}
                onChange={(values.selectedValue = selectedValue)}
                valueGet={valueGet}
                title="Title"
                value1="mr"
                value2="ms"
                span1="Mr"
                span2="Ms."
                error={!!touched.selectedValue && !!errors.selectedValue}
                msg={!selectedValue && (touched.selectedValue && errors.selectedValue)}
                />
                </Box>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Surname"
                onBlur={handleBlur}
                onChange={handleChange}
                value={props.student.surName ? props.student.surName: values.surName}
                name="surName"
                error={!!touched.surName && !!errors.surName}
                helperText={touched.surName && errors.surName}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
                  input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              }
             }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fast Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fastName}
                name="fastName"
                error={!!touched.fastName && !!errors.fastName}
                helperText={touched.fastName && errors.fastName}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
               input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              } }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Middle Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.middleName}
                name="middleName"
                error={!!touched.middleName && !!errors.middleName}
                helperText={touched.middleName && errors.middleName}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
                 input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".Mui-error.css-1rv476z-MuiInputBase-input-MuiFilledInput-input": {
                color: "#f5079e !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              } }}
              />

              <Box sx={{ gridColumn: "span 7" }}>
                <ColorRadioButtons
                name='selectedGender'
                value={values.selectedGender}
                onChange={(values.selectedGender = selectedGender)}
                valueGetGender={valueGetGender}
                title="Gender"
                value1="male"
                value2="feMale"
                span1="Male"
                span2="Female"
                error={!!touched.selectedGender && !!errors.selectedGender}
                msg1={!selectedGender && (touched.selectedGender && errors.selectedGender)}
                />
                </Box>

               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ID No"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.idNo}
                name="idNo"
                error={!!touched.idNo && !!errors.idNo}
                helperText={touched.idNo && errors.idNo}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
                 input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".Mui-error.css-1rv476z-MuiInputBase-input-MuiFilledInput-input": {
                color: "#f5079e !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              } }}
              />

              <Box sx={{ gridColumn: "span 7" }}
                >
                  
                <ColorRadioButtons
                name='selectedNationality'
                value={values.selectedNationality}
                onChange={(values.selectedNationality = selectedNationality)}
                valueGetNationality={valueGetNationality}
                title="Nationality"
                value1="kenya"
                value2="other"
                span1="Kenya"
                span2="Other"
                error={!!touched.selectedNationality && !!errors.selectedNationality}
                msg2={!selectedNationality && (touched.selectedNationality && errors.selectedNationality)}
                />
                </Box>

                {selectedNationality === 'other' && (
                    <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Please specify your Nationality"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nationality}
                name="nationality"
                error={selectedNationality === 'other' && (!!touched.nationality && !!errors.nationality)}
                helperText={touched.nationality && errors.nationality}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
                 input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".Mui-error.css-1rv476z-MuiInputBase-input-MuiFilledInput-input": {
                color: "#f5079e !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              } }}
              />
                )}

            </Box>
            <Box display="flex" mt="50px">
              <Button type="submit" color="secondary" variant="contained">
                NEXT
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
    </>
  );
};

const checkoutSchema = yup.object().shape({
  selectedValue: yup.string().required("You must select one the buttons"),
  surName: yup.string().required("required"),
  fastName: yup.string().required("required"),
  middleName: yup.string().required("required"),
  selectedGender: yup.string().required("You must select one the buttons"),
  idNo: yup.string().required("required"),
  selectedNationality: yup.string().required("You must select one the buttons"),
  nationality: yup.string().required("required"),
});
const initialValues = {
  selectedValue: "",
  surName: "",
  fastName: "",
  middleName: "",
  selectedGender: "",
  idNo: "",
  selectedNationality: "",
  nationality: "N/A",
};

export default Form1;
