import {all,call} from 'redux-saga'

import {fetchCollectionStart} from './shop/shop.saga'

export default function* rootSaga(){
  yield all([call(fetchCollectionStart)])
}