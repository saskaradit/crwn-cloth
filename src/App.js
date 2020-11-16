import React from 'react'
import { Route,Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component.jsx'
import SigninSignupPage from './pages/signin.signup/signin-signup.component.jsx'

import {auth,createUserProfileDocument} from './firebase/firebase.config'

// <Route exact path component>
class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user=>{
      // this.setState({currentUser:user})
      // createUserProfileDocument(user);
      if(user){
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot( snapshot =>{
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      else{
        this.setState({currentUser:user});
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SigninSignupPage}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
