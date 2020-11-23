import React, {useState} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signUpStart} from '../../redux/user/user.action'
import {connect} from 'react-redux'
import './signup.styles.scss'

const SignUp= ({signUpStart}) => {

  const [userCredential,setCredential] = useState({displayName:'',email:'',password:'',confPassword:''})

  const {displayName,email,password,confPassword} = userCredential;

  const handleSubmit = async e => {
    e.preventDefault(); 

    if(password !== confPassword){
      alert('password dont match')
      return;
    }

    signUpStart({displayName,email,password})
  }

  const handleChange = e =>{
    const {name,value} = e.target;

    setCredential({...userCredential,[name]:value})
  }
    return(
      <div className='sign-up'>
        <h2 className='title'>I dont have an account</h2>
        <span>Sign up with your email</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput type="text" name='displayName' value={displayName} onChange = {handleChange} required label="Name"/>
          <FormInput type="email" name='email' value={email} onChange = {handleChange} required label="Email"/>
          <FormInput type="password" name='password' value={password} onChange={handleChange} required label="Password"/>
          <FormInput type="password" name='confPassword' value={confPassword} onChange={handleChange} required label="Confirm Password"/>
          <CustomButton type="Submit">Sign Up</CustomButton>
        </form>
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials )) 
})

export default connect(null,mapDispatchToProps)(SignUp);