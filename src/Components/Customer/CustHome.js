import React, { Component } from 'react'
import OrderMed from './OrderMed'

export default class CustHome extends Component {
  render() {
    return (
      <div>
        Customer Home
        <OrderMed />
      </div>
    )
  }
}