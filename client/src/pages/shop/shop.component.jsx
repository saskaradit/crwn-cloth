import React, {useEffect,lazy,Suspense} from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchCollectionStart } from '../../redux/shop/shop.action';
import Spinner from '../../component/spinner/spinner.component'

const CollectionPageContainer = lazy(()=> import('../collection/collection.container'))
const CollectionsOverviewContainer = lazy(()=> import('../../component/collections-overview/collections-overview.container'))

const ShopPage = ({fetchCollectionStart,match} ) => {

  useEffect(()=>{
    fetchCollectionStart()
  },[fetchCollectionStart])

  return(
    <div className='shop-page'>
      <Suspense fallback={<Spinner/>}>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </Suspense>
    </div>
  )
  
} 

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);