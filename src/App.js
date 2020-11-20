import React from 'react'
import { Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'
import SigninSignupPage from './pages/signin.signup/signin-signup.component.jsx'

import Header from './component/header/header.component.jsx'
import {auth,createUserProfileDocument,addCollectionAndDocs} from './firebase/firebase.config'
import {setCurrentUser} from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selector'
// import {selectColletionArray} from './redux/shop/shop.selectors'

// <Route exact path component>
class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user=>{
      if(user){
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
        setCurrentUser(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SigninSignupPage />)}/>
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
