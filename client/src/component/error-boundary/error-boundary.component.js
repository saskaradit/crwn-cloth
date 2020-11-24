import React from 'react'
import {ErrorImageContainer,ErrorImageOverlay,ErrorImageText} from './error-boundary.styles'

class ErrorBoundary extends React.Component{
  constructor(){
    super()

    this.state = {
      hasError: false
    }
  }


  static getDerivedFromStateError(error){
    //process error
    return {hasError:true}
  }

  componentDidCatch(error,info){
    console.log(error)
  }

  render(){
    if(this.state.hasError){
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png'/>
          <ErrorImageText>`Sorry This Page Went Wrong :(`</ErrorImageText>
        </ErrorImageOverlay>

      )
    }
    return this.props.children
  }
}

export default ErrorBoundary