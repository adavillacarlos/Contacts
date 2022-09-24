const initialState = {
  contacts: [],
};

export const ActionTypes = {
  SET_CONTACTS: "SET_CONTACTS",
  NEW_CONTACT: "NEW_CONTACT",
  EDIT_CONTACT: "EDIT_CONTACT",
  DELETE_CONTACT: "DELETE_CONTACT",
};

export const ActionCreators = {
  setContacts: (payload) => ({ type: ActionTypes.SET_CONTACTS, payload }),
  newContact: (payload) => ({ type: ActionTypes.NEW_CONTACT, payload }),
  editContact: (payload) => ({ type: ActionTypes.EDIT_CONTACT, payload }),
  deleteContact: (payload) => ({ type: ActionTypes.DELETE_CONTACT, payload }),
};

function contactsReducer(state = initialState, action) {
  var contacts;
  switch (action.type) {
    case ActionTypes.SET_CONTACTS:
      return { ...state, contacts: [...action.payload] };
    case ActionTypes.NEW_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts] };
    case ActionTypes.EDIT_CONTACT:
      contacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          contact = action.payload;
        }
        return contact;
      });
      return { ...state, contacts: [...contacts] };
    case ActionTypes.DELETE_CONTACT:
      contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
      return { ...state, contacts: [...contacts] };
    default:
      return state;
  }
}

export default contactsReducer;
