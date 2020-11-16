import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, ...props}) =>{

  return(
    <button className={`${isGoogleSignIn? 'google-sign-ing':''}'custom-button'`} {...props}>
      {children}
    </button>
  )
}

export default CustomButton