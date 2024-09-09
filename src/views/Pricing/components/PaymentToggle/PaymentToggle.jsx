import React from 'react'
import "./PaymentToggle.css"

const PaymentToggle = ({setIsMonthly,isMonthly}) => {

  return (
    <div className="payment-toggle-container">
        <div className="payment-toggle-row">
            <p className={`toggle-label ${!isMonthly ? 'selected' : 'un-selected'}`}>Monthly</p>
        <input onClick={()=>setIsMonthly(isMonthly=>isMonthly = !isMonthly)} type="checkbox" className="payment-toggle" />
            <p className={`toggle-label ${isMonthly ? 'selected' : 'un-selected'}`}>Yearly</p>

        </div>
    </div>
  )
}

export default PaymentToggle