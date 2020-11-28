import React,{useEffect,lazy,Suspense} from 'react'
import { Route,Switch,Redirect } from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {GlobalStyle} from './global.styles'
import Header from './component/header/header.component.jsx'
import {selectCurrentUser} from './redux/user/user.selector'
import {checkUserSession} from './redux/user/user.action'
import Spinner from './component/spinner/spinner.component'
import ErrorBoundary from './component/error-boundary/error-boundary.component'


const HomePage = lazy(()=> import('./pages/homepage/homepage.component'))
const ShopPage = lazy(()=> import('./pages/shop/shop.component'))
const CheckoutPage = lazy(()=> import('./pages/checkout/checkout.component'))
const ContactPage = lazy(()=> import('./pages/contact/contact.component'))
const SigninSignupPage = lazy(()=> import('./pages/signin.signup/signin-signup.component.jsx'))

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route exact path='/checkout' component={CheckoutPage}/>
              <Route exact path='/contact' component={ContactPage}/>
              <Route exact path='/signin' render={() =>currentUser ? (<Redirect to='/' />) : (<SigninSignupPage />)}/>
            </Suspense>
        </ErrorBoundary>
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
