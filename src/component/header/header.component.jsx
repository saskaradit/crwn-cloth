import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.config'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import Cart from '../cart/cart-dropdown.component'
import { selectCurrentUser} from '../../redux/user/user.selector'
import { selectCartHidden} from '../../redux/cart/cart.selector'
import {signOutStart} from '../../redux/user/user.action'


const Header = ({currentUser,hidden,signOutStart}) => (
  <div className='header'>
    <Link to='/' className='logo-container'> 
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {currentUser?<div className='option' onClick={signOutStart}>SIGN OUT</div>
      : <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {
      hidden ? null :
      <Cart/>
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);