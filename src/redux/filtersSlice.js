import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState =  '';

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setContactsFilter(state, action) {
     return ( state = action.payload);
    },
  },
});

export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
