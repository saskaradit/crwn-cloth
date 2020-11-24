import React,{useEffect} from 'react'
import { Route,Switch,Redirect } from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'
import SigninSignupPage from './pages/signin.signup/signin-signup.component.jsx'
import {GlobalStyle} from './global.styles'
import Header from './component/header/header.component.jsx'
import {selectCurrentUser} from './redux/user/user.selector'
import {checkUserSession} from './redux/user/user.action'

// <Route exact path component>
const App = ({checkUserSession,currentUser}) => {

  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={() =>currentUser ? (<Redirect to='/' />) : (<SigninSignupPage />)}/>
      </Switch>
    </div>
  );

}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
