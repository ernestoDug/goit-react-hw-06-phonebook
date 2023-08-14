// для лок ст
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

const persistConfig = {
  key: 'root',
  storage,
  // Нео для л/с
  whitelist: ['contacts'],
};
// поєднувач редюсерів
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
// для л/с
export const persistedReducer = persistReducer(persistConfig, rootReducer);
