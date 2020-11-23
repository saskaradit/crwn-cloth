import React from 'react';
import './signin-signup.styles.scss'
import SignIn from '../../component/signin/signin.component'
import SignUp from '../../component/signup/signup.component'

const SigninSignupPage = () => (
  <div className='signin-signup'>
    <SignIn/>
    <SignUp/>
  </div>
)

export default SigninSignupPage;