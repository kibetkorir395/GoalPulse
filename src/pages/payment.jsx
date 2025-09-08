import React from 'react'
import './payment.css'

export default function Payment() {
  return (
    <div className="payment-container">
    <h2>Checkout</h2>
    <form>
        <div className="form-group">
            <label for="plan">Selected Plan</label>
            <select id="plan">
                <option>Daily - Ksh 640 / $1</option>
                <option>Weekly - Ksh 32,00 / $25</option>
                <option>Monthly - Ksh 10,000 / $77</option>
                {/*<option>Yearly - Ksh 10,000 / $100</option>*/}
            </select>
        </div>

        <div className="form-group">
            <label for="method">Payment Method</label>
            <select id="method">
                <option>MPesa</option>
                <option>PayPal</option>
                <option>Crypto</option>
                <option>Card Payment</option>
            </select>
        </div>

        <div className="form-group">
            <label for="number">Phone / Wallet / Card Number</label>
            <input type="text" id="number" placeholder="Enter details"/>
        </div>

        <button type="submit" className="btn">Pay Now</button>
    </form>
</div>
  )
}
