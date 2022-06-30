import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CustHome extends Component {
  render() {
    return (
      <div>
        Customer Home
        <Link to='/myCart'>
            <button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">My Cart</button>
        </Link>
        <Link to='/orderMed'>
            <button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Order Medicine</button>
        </Link>
        <Link to='/takesubs'>
            <button type="submit" id='btn-color' class="btn btn-color px-5 mb-5 w-100">Take Subscription</button>
        </Link>
      </div>
    )
  }
}