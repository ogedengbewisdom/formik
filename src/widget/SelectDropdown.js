import { ErrorMessage, Field } from 'formik'
import React from 'react'

const SelectDropdown = ({label, name, options}) => {

  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field as='select' name={name} id={name}>
            {options.map((option) => {
                return(
                    <option key={option.value} value={option.value}>{option.key}</option>
                )
            })}
        </Field>
        <ErrorMessage name={name}>
        {errorMsg => (
                <p className='error-text'>{errorMsg}</p>
            )}
        </ErrorMessage>
    </div>
  )
}

export default SelectDropdown