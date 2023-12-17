import {Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup"

const initialValues = {
  name: "",
  email: "",
  channel: "YouTube",
  social: {
    facebook: "",
    twitter: ""
  },
  phNumber: ["", ""],
  address: [""]
}


const onSubmit = (values, onSubmitProps) => {
  setTimeout(() => {
    console.log("FormData: " , values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm()
  }, 4000)
  
  
}

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Enter a valid email").required("Required"),
  channel: yup.string().required("Required"),
  social: yup.object({
    facebook: yup.string().min(3, "Facebook input must have min of 3 character").required("Required"),
    twitter: yup.string().required("Required")
  }),
  phNumber: yup.array().of(yup.string().matches(/^\d{10}$/, "Invalid phone number format").required("Required")),
  address: yup.array().of(yup.string().trim().min(1, "Address cannot be empty").required("Required") )
})


const SimpleInput = (props) => {

  return (
    <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form >
          <div className='control-group'>
            <div className={`form-control ${formik.touched.name && formik.errors.name ? "invalid" : ""}`}>
              <label htmlFor='name'>Name</label>
              <Field 
                  type='text' 
                  id='name'
                  name="name"
                  />
                  <ErrorMessage name="name">
                    {errorMessage => <p className="error-text">{errorMessage}</p>}
                  </ErrorMessage>
            </div>
            <div className={`form-control ${formik.touched.email && formik.errors.email ? "invalid" : ""}`}>
            <label htmlFor='email'>E-Mail Address</label>
            <Field 
                  type='email' 
                  id='email' 
                  name="email" />
                  <ErrorMessage name="email">
                     {errorMessage => <p className="error-text">{errorMessage}</p>}
                  </ErrorMessage>
          </div>
          </div>
          <div className={`form-control ${formik.touched.channel && formik.errors.channel ? "invalid" : ""}`}>
              <label htmlFor='channel'>Channel</label>
              <Field 
                  type='text' 
                  id='channel' 
                  name="channel" 
              />
                  <ErrorMessage name="channel">
                     {errorMessage => <p className="error-text">{errorMessage}</p>}
                  </ErrorMessage>
            </div>
            <div className="control-group">
            <div className={`form-control ${formik.touched.social && formik.touched.social.facebook && formik.errors.social && formik.errors.social.facebook ? "invalid" : ""}`}>
              <label htmlFor='facebook'>Facebook</label>
              <Field 
                  type='text' 
                  id='facebook' 
                  name="social.facebook" 
              />
                  <ErrorMessage name={"social.facebook"}>
                     {errorMessage => <p className="error-text">{errorMessage}</p>}
                  </ErrorMessage>
            </div>
            <div className={`form-control ${formik.touched.social && formik.touched.social.twitter && formik.errors.social && formik.errors.social.twitter ? "invalid" : ""}`}>
              <label htmlFor='twitter'>Twitter</label>
              <Field 
                  type='text' 
                  id='twitter' 
                  name="social.twitter" 
              />
                  <ErrorMessage name={"social.twitter"}>
                     {errorMessage => <p className="error-text">{errorMessage}</p>}
                  </ErrorMessage>
            </div>
            </div>

            <div className="control-group">
            <div className={`form-control ${formik.touched.phNumber && formik.touched.phNumber[0] && formik.errors.phNumber && formik.errors.phNumber[0] ? "invalid" : ""}`}>
              <label htmlFor='phNumber1'>Phone number 1</label>
              <Field 
                  type='text' 
                  id='phNumber1' 
                  name="phNumber[0]" 
              />
                  <ErrorMessage name={"phNumber[0]"}>
                     {errorMessage => <p className="error-text">{errorMessage}</p>}
                  </ErrorMessage>
            </div>
            <div className={`form-control ${formik.touched.phNumber && formik.touched.phNumber[1] && formik.errors.phNumber && formik.errors.phNumber[1] ? "invalid" : ""}`}>
              <label htmlFor='phNumber2'>Phone number 2</label>
              <Field 
                  type='text' 
                  id='phNumber2' 
                  name="phNumber[1]" 
              />
                  <ErrorMessage name={"phNumber[1]"}>
                     {errorMessage => <p className="error-text">{errorMessage}</p>}
                  </ErrorMessage>
            </div>
            </div>

            <div className={`form-control ${formik.touched.address && formik.errors.address ? "invalid" : ""}`}>
              <label htmlFor='address'>Address</label>
              <FieldArray name="address">
                  {props => {
                    const { push, form, remove } = props;
                    const {values} = form;
                    const {address} = values;
                    return (
                      <div>
                        {address.map((addres, index) => (
                          <div key={index} style={{display: "flex", flexWrap: "wrap"}}>
                            <Field name={`address[${index}]`} />  
                            {index > 0 && 
                            <button style={{marginLeft: "10px"}} type="button" onClick={() => remove(index)}>-</button>
                            }
                            <button style={{marginLeft: "10px"}} type="button" onClick={() => push("")}>+</button>
                          </div>
                        ))}
                      </div>
                    )
                  }}
              </FieldArray>
                  <ErrorMessage name={"address"}>
                     {errorMessage => <p className="error-text">{errorMessage}</p>}
                  </ErrorMessage>
            </div>
          <div className='form-actions'>
            <button type="submit" disabled={formik.isSubmitting}>Submit</button>
          </div>
        </Form>
        )
      }}
    
    </Formik>
  );
};

export default SimpleInput;
