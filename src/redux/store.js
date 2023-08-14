import { configureStore, combineReducers } from '@reduxjs/toolkit';
// для лок ст
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
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
// поєднувач редюсерів
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
// для л/с
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
