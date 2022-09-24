import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    setContacts: (state, action) => {
      return { ...state, contacts: [...action.payload] };
    },
    newContact: (state, action) => {
      return { ...state, contacts: [action.payload, ...state.contacts] };
    },
    editContact: (state, action) => {
      const contacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          contact = action.payload;
        }
        return contact;
      });
      return { ...state, contacts: [...contacts] };
    },
    deleteContact: (state, action) => {
      const contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
      return { ...state, contacts: [...contacts] };
    },
  },
});

export const {setContacts, newContact, editContact, deleteContact} =  contactsSlice.actions; 

export default contactsSlice.reducer; 