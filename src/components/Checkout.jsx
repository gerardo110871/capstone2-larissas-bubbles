import React from 'react'
import axios from 'axios';
import StripeCheckout from "react-stripe-checkout";


function Checkout() {

    function onToken(token) {
        axios
          .post("http://localhost:3333/checkout", { token, amount: 25 })
          .then((response) => console.log(response));
      }
  return (
    <div className="pay-btn">
        <StripeCheckout
          shippingAddress={true}
          billingAddress={true}
          amount={2500}
          token={onToken}
          stripeKey="pk_test_51L2zMsKoo2msHaXoHMXYUAQBx6YlY6H98U9TEHoRYXDOfkf0fStegSVw5LxjFUIxSda871YDRYNs9lofQPVDiOUw00yzXpjmKM"
        />
      </div>
  )
}

export default Checkout