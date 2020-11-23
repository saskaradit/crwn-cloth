import React,{useState} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './signin.styles.scss'
import {connect} from 'react-redux'
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action'

const Signin = ({emailSignInStart,googleSignInStart}) => {

  const [userCredential,setCredential] = useState({email:'',password:''})
  
  const {email,password} = userCredential;

  const handleSubmit = async e => {
    e.preventDefault();
    emailSignInStart(email,password)
  }

  const handleChange = e => {
    const {value,name} = e.target

    setCredential({...userCredential,[name]:value})
  }

  return(
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign In with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" value={email} handleChange={handleChange} label="email" required />
        <FormInput name="password" type="password" value={password} handleChange={handleChange} label="password" required />

        <div className='buttons'>
          <CustomButton type="submit" value="Sign In"> Sign In</CustomButton>
          <CustomButton  type="button" onClick={googleSignInStart} isGoogleSignIn> Sign In With Google</CustomButton>
        </div>
      </form>
    </div>
  )

}

const mapDispatchToProps = dispatch => ({
  googleSignInStart : () => dispatch(googleSignInStart()),
  emailSignInStart : (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(Signin);