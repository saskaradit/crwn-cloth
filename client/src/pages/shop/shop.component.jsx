import React, {useEffect} from 'react';
import {Route} from 'react-router-dom'
import CollectionPageContainer from '../collection/collection.container'
import {connect} from 'react-redux'
import { fetchCollectionStart } from '../../redux/shop/shop.action';
import CollectionsOverviewContainer from '../../component/collections-overview/collections-overview.container'

const ShopPage = ({fetchCollectionStart,match} ) => {

  useEffect(()=>{
    fetchCollectionStart()
  },[fetchCollectionStart])

  return(
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
      <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
    </div>
  )
  
} 

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);