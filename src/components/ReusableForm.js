

import { Form, Formik } from 'formik'
import React from 'react'
// import FormControl from '../widget/FormControl';
import * as yup from "yup"
import Input from '../widget/Input';
import Textarea from '../widget/Textarea';
import SelectDropdown from '../widget/SelectDropdown';
import RadioInput from '../widget/RadioInput';
import CheckBoxInput from '../widget/CheckBoxInput';


const selectOptionsArray = [
    {key: "Select Experience", value: "experience"},
    {key: "Expert", value: "expert"},
    {key: "Novice", value: "novice"},
    {key: "Beginner", value: "beginner"}
]

const radioInputOptions = [
    {key: "Newsletter", value: "newsletter"},
    {key: "Email", value: "emailAddress"}
]

const checkBoxInputOptions = [
    {key: "Option 1", value: "option1"},
    {key: "Option 2", value: "option2"},
    {key: "Option 3", value: "option3"}
]


const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    date: ""
}

const validationSchema = yup.object({
    email: yup.string().email().required("Required"),
    description: yup.string().required("Required"),
    selectOption: yup.string().required("Required"),
    radioOption: yup.string().required("Required"),
    checkboxOption: yup.array().required("Required"),
    date: yup.date().required("Required").nullable()
});

const onSubmit = (values) => {
    console.log("Form values", values)
}

const ReusableForm = () => {
  return (
    <Formik 
       onSubmit={onSubmit}
       initialValues={initialValues}
       validationSchema={validationSchema}
    >
        {
            formik => {

                const emailError = formik.errors.email && formik.touched.email;
                const descriptionError = formik.errors.description && formik.touched.description
                const dateError = formik.errors.date && formik.touched.date
                return (
                    <Form>
                        <Input name="email" label="Email" type="email" error={emailError} />
                        <Textarea name="description" label="Description" error={descriptionError} />
                        <SelectDropdown name="selectOption" options={selectOptionsArray} label={"Select Experience"} />
                        <RadioInput name="radioOption" options={radioInputOptions} label="Radio Options" />
                        <CheckBoxInput name="checkboxOption" label="Checkbox Options" options={checkBoxInputOptions} />
                        <Input name="date" label="Date" type="date" error={dateError} />
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        }
    </Formik>
  )
}



export default ReusableForm


