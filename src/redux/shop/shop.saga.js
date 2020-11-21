import {takeLatest,call,put} from 'redux-saga/effects'
import {firestore,convertSnapshotToMap} from '../../firebase/firebase.config'
import {fetchCollectionStart,fetchCollectionFail, fetchCollectionSuccess} from './shop.action'
import ShopActionType from './shop.type'

export function* fetchCollectionAsync(){
  yield console.log('bread')


  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertSnapshotToMap,snapshot)
    yield put(fetchCollectionSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionFail(error.message))
  }

}

export function* fetchCollectionStart(){
  yield takeLatest(ShopActionType.FETCH_COLLETCIONS_START,fetchCollectionAsync)
}