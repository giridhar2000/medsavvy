import React from 'react'
import { useFormik } from 'formik'


export default function orderMed() {
  const initialValues = {
    Medname: '',
    Quantity: ''
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
                  <h2 style={{color: '#2dafa9'}}>Order Medicine</h2>
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
              <div class="text-center"><button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Search</button></div>
              <div class="text-center"><button type="cancel" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Cancel</button></div>

            </form>
          </div>
        </div>

      </div>
      <table class='table table-hover table-dark'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Medicine Name</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
              <td>Dolo</td>
              <td>40</td>
              <td>JUN-2025</td>
          </tr>
          <tr>
            <th scope="row">2</th>
              <td>Sitracin</td>
              <td>36</td>
              <td>FEB-2028</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Paracitamol</td>
            <td>34</td>
            <td>AUG-2024</td>
          </tr>
          
        </tbody>
      </table>
      </div>
  )
}
