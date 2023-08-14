import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import {
  FLUSH,
  persistStore,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  PAUSE,
  persistReducer,
} from 'redux-persist';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, 
  rootReducer);

export const store = configureStore({
  devTools: true,
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
