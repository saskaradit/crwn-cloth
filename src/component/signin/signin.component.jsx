import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './signin.styles.scss'

import {auth,signinGoogle} from '../../firebase/firebase.config'

class Signin extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      email:'',
      password:''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const {email,password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({email:'',password:''});
    } catch (error) {
      console.log(error);
    }

    this.setState({email:'',password:''})
  }

  handleChange = e => {
    const {value,name} = e.target

    this.setState({[name]:value})
  }

  render(){
    return(
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
          <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required />

          <div className='buttons'>
            <CustomButton type="submit" value="Sign In"> Sign In</CustomButton>
            <CustomButton  type="button" onClick={signinGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default Signin;