
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Textarea = (props) => {
    const {name, label, error} = props;

  return (
    <div className={`form-control ${error ? "invalid" : ""}`}>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} as="textarea" />
        <ErrorMessage name={name}>
            {errorMsg => (
                <p className='error-text'>{errorMsg}</p>
            )}
        </ErrorMessage>
    </div>
  )
}

export default Textarea;