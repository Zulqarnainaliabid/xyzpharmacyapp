import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import booksReducer from './reducer';
import {quantityReducer} from './reducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarks'],
};

const Config = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['Get_quantity'],
};

const rootReducer = combineReducers({
  booksReducer: persistReducer(persistConfig, booksReducer),
  quantityReducer:persistReducer(Config, quantityReducer)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);