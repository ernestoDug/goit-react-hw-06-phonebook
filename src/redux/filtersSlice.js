import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    filterContacts(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { filterContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
