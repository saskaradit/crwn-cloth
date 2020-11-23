import {createStructuredSelector}  from 'reselect'
import {compose } from 'redux'
import {connect} from 'react-redux'
import { isSelectionLoaded} from '../../redux/shop/shop.selectors';
import withSpinner from '../../component/spinner/spinner.component';
import CollectionPage from './collection.component'

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !isSelectionLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage)

export default CollectionPageContainer