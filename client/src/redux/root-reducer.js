import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import shopReducer from './shop/shop.reducers'
import directoryReducer from './directory/directory.reducer'

const persistConfig = {
  key:'root',
  storage,
  whitelist:['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer
// }) 
// before local storage


export default persistReducer(persistConfig,rootReducer);