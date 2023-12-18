
import { Field } from 'formik'
import React, { Fragment } from 'react'

const CheckBoxInput = ({label, name, options}) => {
  return (
    <div className='form-control'>
        <p>{label}</p>
        <Field name={name}>
            {(props) => {
                const {field} = props;
                return (
                    options.map(option => {
                        return <Fragment key={option.value}>
                                    <input 
                                        type='checkbox'
                                        {...field}
                                        id={`${name}-${option.value}`}
                                        value={option.value}
                                        checked={field.value.includes(option.value)}
                                    />
                                    <label htmlFor={`${name}-${option.value}`}>{option.key}</label>
                              </Fragment>
                    })
                )
            }}
        </Field>
    </div>
  )
}

export default CheckBoxInput