import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-component.styles.scss'

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-item'/>
    <CustomButton>Checkout</CustomButton>
  </div>
)

export default CartDropdown