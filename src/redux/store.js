import { configureStore } from '@reduxjs/toolkit';
import { contatsReducer, filterReducer } from 'components/reduser';



export const store = configureStore({
  reducer: {
    contacts: contatsReducer,
    filter: filterReducer



  },
});
