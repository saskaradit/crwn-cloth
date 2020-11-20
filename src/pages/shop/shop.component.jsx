import React from 'react';
import {Route} from 'react-router-dom'
import CollectionOverview from '../../component/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import {firestore, convertSnapshotToMap} from '../../firebase/firebase.config'
import {connect} from 'react-redux'
import { updateCollection } from '../../redux/shop/shop.action';

import withSpinner from '../../component/spinner/spinner.component';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends React.Component{
  state = {
    loading: true
  }
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get()
    .then( snapshot=>{
      const collectionMap = convertSnapshotToMap(snapshot)
      updateCollections(collectionMap)
      this.setState({loading:false})
    })
    
  }

  render() {
    const {match} = this.props
    const {loading} = this.state
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={loading} {...props}/>} />
        <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props}/> } />
      </div>
    )
  }
} 

const mapDispatchToProps = dispatch => ({
  updateCollections: (collectionsMap) => dispatch(updateCollection(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);