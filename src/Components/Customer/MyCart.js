import React from 'react'

export default function MyCart() {
  return (
    <div className='container'>
        My Cart
        <div  class="row customer">
        <div class="col-md-6 offset-md-3">
          <div class="card my-5">
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
          <td>2</td>
          <td>JUN-2025</td>
      </tr>
      <tr>
        <th scope="row">2</th>
          <td>Sitracin</td>
          <td>5</td>
          <td>FEB-2028</td>
      </tr>
    </tbody>
  </table>
            </div>
        </div>
    </div>
</div>
    
  )
}
