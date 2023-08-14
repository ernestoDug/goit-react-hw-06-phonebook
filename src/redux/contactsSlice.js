import { createSlice, nanoid } from "@reduxjs/toolkit";

// 1
const contactsInitialState = [
    { id: 'id-4', name: 'John Lennon', number: '227-91-26' },
    { id: 'id-3', name: 'Paul McCartney', number: '645-17-79' },
    { id: 'id-1', name: 'George Harrison', number: '459-12-56' },
    { id: 'id-2', name: 'Ringo Starr', number: '443-89-12' },
  ];

// 
const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  // .+кон
  reducers: {
        addContacts: {
      reducer(state, action) {
      return  [...state, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    // - кон
    deletecontacts(state, {payload}) {
      return state.filter(contact => contact.id !== payload);
    },
     },
});

export const { addContacts, deletecontacts,  } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
