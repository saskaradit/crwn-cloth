import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartItem,selectCartTotal } from '../../redux/cart/cart.selector'
import './checkout.styles.scss'
import CheckoutItem from '../../component/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component'

const CheckoutPage = ({cartItems,total}) =>(
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(item=> <CheckoutItem key={item.id} item={item}/>)
    }
    <div className='total'>
      <span>Total: ${total}</span>
    </div>
    <div className='test-warning'>
      *Please use the following credit card for the payment*
      <br/> 4242 4242 4242 4242 - Exp: 01/21 - CVV : 123
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItem,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)