import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "YouTube"
}

// const onSubmit = (values) => {
//   console.log("values: " + values)
// }

const onSubmit = (values) => {
  console.log("FormData: " , values)
}

const validate = value => {
  const error = {}

  if(!value.name) {
    error.name = "Required"
  }

  if(!value.email) {
    error.email = "Required"
  }

  if(!value.channel) {
    error.channel = "Required"
  }

  return error
};

const BasicForm = (props) => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='control-group'>
        <div className={`form-control ${formik.errors.name && formik.touched.name ? "invalid" : ""}`}>
          <label htmlFor='name'>Name</label>
          <input 
              type='text' 
              id='name'
              name="name" 
              onChange={formik.handleChange} 
              value={formik.values.name} 
              onBlur={formik.handleBlur} />
              {formik.touched.name && formik.errors.name && <p className="error-text">{formik.errors.name}</p>}
        </div>
        <div className={`form-control ${formik.errors.email && formik.touched.email ? "invalid" : ""}`}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
              type='email' 
              id='email' 
              name="email" 
              onChange={formik.handleChange} 
              value={formik.values.email} 
              onBlur={formik.handleBlur} />
              {formik.touched.email && formik.errors.email && <p className="error-text">{formik.errors.email}</p>}
      </div>
      </div>
      <div className={`form-control ${formik.errors.channel && formik.touched.channel? "invalid" : ""}`}>
          <label htmlFor='channel'>Channel</label>
          <input 
              type='text' 
              id='channel' 
              name="channel" 
              onChange={formik.handleChange} 
              value={formik.values.channel} 
              onBlur={formik.handleBlur} />
              {formik.touched.channel && formik.errors.channel && <p className="error-text">{formik.errors.channel}</p>}
        </div>
      <div className='form-actions'>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
