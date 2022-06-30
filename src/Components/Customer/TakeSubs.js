import React from 'react'
import { useFormik } from 'formik'

export default function TakeSubs() {
    const initialValues = {
        Medname: '',
        Quantity: '',
        months: ''
      }
    
      const onSubmit = values => {
        // alert(JSON.stringify(values, null, 2));
      }
    
      const validate = values => {
        const errors = {}
        if (!values.Medname) {
          errors.Medname = 'Medname required';
        }
        if (!values.Quantity) {
          errors.Quantity = 'Quantity required';
        }
        if (!values.months) {
            errors.months = 'months required';
          }
        return errors
      }
    
      const formik = useFormik({
        initialValues,
        onSubmit,
        validate
      })
  return (
    <div className='container'>
        <div  class="row customer">
            <div class="col-md-6 offset-md-3">
                <div class="card my-5">
                <form onSubmit={formik.handleSubmit} class="card-body cardbody-color p-lg-5">
  
                    <div style={{marginBottom: '5vh'}} class="text-center">
                        <h2 style={{color: '#2dafa9'}}>Take Subscription</h2>
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control" id="Medname" name="Medname" placeholder="Medicine Name" onChange={formik.handleChange}
                        value={formik.values.Medname}></input>
                        {formik.errors.Medname ? <div className='error'>{formik.errors.Medname}</div> : null}
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control" id="Quantity" name="Quantity" placeholder="Quantity" onChange={formik.handleChange}
                        value={formik.values.Quantity}></input>
                        {formik.errors.Quantity ? <div className='error'>{formik.errors.Quantity}</div> : null}
                    </div>

                    <div class="mb-3">
                        <input type="number" class="form-control" id="months" name="months" placeholder="Months" onChange={formik.handleChange}
                        value={formik.values.months}></input>
                        {formik.errors.months ? <div className='error'>{formik.errors.months}</div> : null}
                    </div>
                    <div class="text-center"><button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Submit</button></div>
                    <div class="text-center"><button type="cancel" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Cancel</button></div>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
