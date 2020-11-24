import React from 'react'
import Spin from '../spin/spin.component'

const  Spinner = WrappedComponent => ({isLoading,...props}) => {
  return isLoading ? <Spin/> : <WrappedComponent {...props}/>
}

export default Spinner;