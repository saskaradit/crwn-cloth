import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './collections-overview.styles.scss'

import CollectionPreview from '../collection/collection.component'
import {selectColletionArray} from '../../redux/shop/shop.selectors'

const collectionOverview = ({collections}) => (
  <div className='collections-overview'>
    {
      collections.map(({id, ...otherCollectionProps})=>(
        <CollectionPreview key={id} {...otherCollectionProps}/>
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectColletionArray
})

export default connect(mapStateToProps)(collectionOverview)