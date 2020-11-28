import React,{Suspense} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Spinner from '../../component/spinner/spinner.component'
import { selectCurrentUser} from '../../redux/user/user.selector'
import './contact.styles.scss'

const ContactPage = ({currentUser}) => (
  <div className='contact'>
    <Suspense fallback={<Spinner/>}>
      {
        currentUser? (
          <div>
            <h1 className='title'>Contact Crown Cloth</h1>
            <h2>Silicon Valley</h2>
            <h3>contact@crown.com</h3>
            <h3>+2 124 770</h3>
          </div>
          
          ) :
        <h1>Pls Sign In</h1>
      }
    </Suspense>
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

export default connect(mapStateToProps)(ContactPage);