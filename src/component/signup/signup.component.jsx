import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth,createUserProfileDocument} from '../../firebase/firebase.config'
import './signup.styles.scss'

class SignUp extends React.Component{
  constructor(){
    super();
    this.state={
      displayName:'',
      email:'',
      password:'',
      confPassword:''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {displayName,email,password,confPassword} = this.state

    if(password !== confPassword){
      alert('password dont match')
      return;
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email,password);
      await createUserProfileDocument(user,{displayName});

      this.setState({
        displayName:'',
        email:'',
        password:'',
        confPassword:''
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = e =>{
    const {name,value} = e.target;

    this.setState({[name]:value})
  }
  
  render(){
    const {displayName,email,password,confPassword} = this.state
    return(
      <div className='sign-up'>
        <h2 className='title'>I dont have an account</h2>
        <span>Sign up with your email</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput type="text" name='displayName' value={displayName} onChange = {this.handleChange} required label="Name"/>
          <FormInput type="email" name='email' value={email} onChange = {this.handleChange} required label="Email"/>
          <FormInput type="password" name='password' value={password} onChange={this.handleChange} required label="Password"/>
          <FormInput type="password" name='confPassword' value={confPassword} onChange={this.handleChange} required label="Confirm Password"/>
          <CustomButton type="Submit">Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;