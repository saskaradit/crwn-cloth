import {connect} from 'react-redux'
import {createStructuredSelector}  from 'reselect'
import {compose } from 'redux'
import {selectIsColletion} from '../../redux/shop/shop.selectors'
import withSpinner from '../spinner/spinner.component'
import CollectionsOverview from '../collections-overview/collections-overview.component'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsColletion
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer