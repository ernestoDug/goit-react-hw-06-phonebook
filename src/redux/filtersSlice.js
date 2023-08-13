import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  status: '',
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setContactsFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
