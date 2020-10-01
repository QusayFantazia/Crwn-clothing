import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import rootReducer from '../redux/root-reducer'
import { persistStore } from 'redux-persist'

const middelWares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middelWares))

const persistor = persistStore(store)

export { store, persistor };