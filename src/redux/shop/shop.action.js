import ShopActionTypes from './shop.type'
import {firestore,convertSnapshotToMap} from '../../firebase/firebase.config'

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLETCIONS_START
})

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLETCIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionFail = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLETCIONS_FAIL,
  payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart())

    collectionRef.get()
    .then( snapshot=>{
      const collectionMap = convertSnapshotToMap(snapshot)
      dispatch(fetchCollectionSuccess(collectionMap))
    }).catch(err => dispatch(fetchCollectionFail(err)))
  }
}

