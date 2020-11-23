import {takeLatest,call,put,all} from 'redux-saga/effects'
import {firestore,convertSnapshotToMap} from '../../firebase/firebase.config'
import {fetchCollectionFail, fetchCollectionSuccess} from './shop.action'
import ShopActionType from './shop.type'

export function* fetchCollectionAsync(){ 
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

export function* shopSaga(){
  yield all([call(fetchCollectionStart)])
}