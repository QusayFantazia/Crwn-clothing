import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import userReducer from './user/user.reducer.js'
import CartReducer from './cart/cart.reducer.js'
import DirectoryReducer from './directory/directory-reducer.js'
import shopReducer from './shop/shop-reducer.js'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user', 'cart', 'directory', 'shop']
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: shopReducer

})

export default persistReducer(persistConfig, rootReducer)