import React from 'react'
import {connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import {withRouter} from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItem} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import {toggleCartHidden} from '../../redux/cart/cart.action'

const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ? 
        cartItems.map(item => (<CartItem key={item.id} item={item}/>))
        : <span className='empty-message'>Your Cart Is Empty</span>
      }
    </div>
    <CustomButton onClick={()=> {
      history.push('/checkout')
      dispatch(toggleCartHidden())}}>
      Checkout</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropdown));