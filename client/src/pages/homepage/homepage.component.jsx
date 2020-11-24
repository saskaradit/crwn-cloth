import React,{Suspense} from 'react';
import  './homepage.styles.scss'
import Directory from '../../component/directory/directory.component' 
import Spinner from '../../component/spinner/spinner.component'

const HomePage =()=>{
  return(
    <Suspense fallback={<Spinner/>}>
      <div className='homepage'>
      <Directory/>
      </div>
    </Suspense>
  )
}

export default HomePage;