

import { Field, ErrorMessage } from 'formik'
import React, { Fragment } from 'react'

const RadioInput = ({name, label, options}) => {
  return (
    <div className='form-control'>
        <p>{label}</p>
        <Field name={name}>
            {({field}) => {
                // console.log(field)
                return (
                    options.map(option => {
                        return (
                            <Fragment key={option.key}>
                                <input 
                                   type='radio'
                                  {...field}
                                   value={option.value}
                                   id={`${name}-${option.value}`}
                                   checked={field.value === option.value}
                                />
                                <label htmlFor={`${name}-${option.value}`}>{option.key}</label>
                            </Fragment>
                        )
                    })
                )
            }}
        </Field>
        <ErrorMessage name={name}>
        {errorMsg => (
                <p className='error-text'>{errorMsg}</p>
            )}
        </ErrorMessage>
    </div>
  )
}

export default RadioInput