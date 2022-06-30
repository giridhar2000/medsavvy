import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderMed() {
  const Med = {
  data: [
    {
      "id": "1",
      "name": "Dolo",
      "quantity":"40",
      "ExpiryDate": "JUN-2025",
    },
    {
      "id": "2",
      "name": "Sitracin",
      "quantity":"36",
      "ExpiryDate": "FEB-2028",
    },
    {
      "id": "3",
      "name": "Paracitamol",
      "quantity":"34",
      "ExpiryDate": "AUG-2024",
    }
  ]
}
        
  return (
    <div className='container'>
      <table class='table table-hover table-dark'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Medicine Name</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Expiry Date</th>
          </tr>
        </thead>
        {Med.data?.map((item, index) => (
        <tbody>
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.ExpiryDate}</td>
            <td><button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Add to cart</button></td>
          </tr>
        </tbody>
        ))}
      </table>
      <Link to='/myCart'>
            <button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">My Cart</button>
        </Link>
    </div>
  )
}
