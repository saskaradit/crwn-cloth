import React from 'react'
import {SpinnerContainer,SpinnerOverlay} from './spinner.styles'

const  withSpinner = WrappedComponent => ({isLoading,...props}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer/>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...props}/>
  )
}

export default withSpinner;