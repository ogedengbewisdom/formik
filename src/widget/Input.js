
import { ErrorMessage, Field } from 'formik'
import React from 'react'

const Input = (props) => {
    const {name, type, label, error} = props;

  return (
    <div className={`form-control ${error ? "invalid" : ""}`}>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} type={type} autoComplete={name} />
        <ErrorMessage name={name}>
            {errorMsg => (
                <p className='error-text'>{errorMsg}</p>
            )}
        </ErrorMessage>
    </div>
  )
}

export default Input