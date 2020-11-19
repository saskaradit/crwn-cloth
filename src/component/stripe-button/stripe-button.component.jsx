import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
  const priceInCents = price * 100
  const publishableKey = 'pk_test_51Hp4eGErCpQSuQA2EmSQWOMiJA93gAKE5Y4imksgbC4j7jcCuZ06AWgQiZ62tysR9xhHt2TDoaSjD5ruqQjN5f9500Bn8Sx1N3'

  const onToken = token =>{
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
    label='Pay Now'
    name='Crown Cloth'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your Total is $${price}`}
    amount={priceInCents}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;