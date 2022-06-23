import React from 'react'
import { useFormik } from 'formik'

export default function SalesMedicine() {
  const initialValues = {
    startDate: '',
    endDate: ''
  }

  const validation = values => {
    const errors = {}
    if(!values.startDate){
      errors.startDate = 'startDate is required'
    }
    if(!values.endDate){
      errors.endDate = 'endDate is required'
    }
    return errors
  }

  const formik = useFormik ({
    initialValues,
    validation
  })
  return (
    <div className='container'>
    <div  class="row customer">
    <div class="col-md-6 offset-md-3">
      <div class="card my-5">

        <form onSubmit={formik.handleSubmit} class="card-body cardbody-color p-lg-5">

          <div style={{marginBottom: '5vh'}} class="text-center">
              <h2 style={{color: '#2dafa9'}}>Sales Medicine</h2>
          </div>

          <div class="mb-3">
            <input type="text" class="form-control" id="Medname" name='startDate' placeholder="Start Date" onChange={formik.handleChange}
                value={formik.values.startDate}></input>
                {formik.errors.startDate ? <div className='error'>{formik.errors.startDate}</div> : null}
          </div>

          <div class="mb-3">
            <input type="text" class="form-control" id="endDate" name='endDate' placeholder="End Date" onChange={formik.handleChange}
                value={formik.values.endDate}></input>
                {formik.errors.endDate ? <div className='error'>{formik.errors.endDate}</div> : null}
          </div>

          <div class="text-center"><button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Submit</button></div>
          <div class="text-center"><button type='cancel' id='btn-color' class="btn btn-color px-5 mb-5 w-100">Cancel</button></div>

        </form>
      </div>
    </div>

  </div>
  <table>
    
  </table>
  </div>
  )
}
