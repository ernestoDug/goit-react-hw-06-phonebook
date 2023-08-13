import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContacts = createAction("contacts/addContacts", number => {
  return {
    payload: {
      number,
      id: nanoid(),
    },
  };
});
console.log(addContacts.type)


export const deleteContacts = createAction("contacts/deleteContacts");

export const setContactsFilter = createAction("filters/setContactsFilter");
