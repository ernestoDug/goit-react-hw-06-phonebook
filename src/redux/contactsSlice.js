import { createSlice, nanoid } from "@reduxjs/toolkit";


const contactsInitialState = [
    { id: 'id-4', name: 'John Lennon', number: '227-91-26' },
    { id: 'id-3', name: 'Paul McCartney', number: '645-17-79' },
    { id: 'id-1', name: 'George Harrison', number: '459-12-56' },
    { id: 'id-2', name: 'Ringo Starr', number: '443-89-12' },
  ];


const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deletecontacts(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
     },
});

export const { addTask, deleteTask, toggleCompleted } = contactsSlice.actions;
export const tasksReducer = contactsSlice.reducer;
