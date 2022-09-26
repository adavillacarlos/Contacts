import {
  newContact,
  editContact,
  deleteContact,
  setContactsError,
  editContactError,
  deleteContactError,
  newContactError,
} from "../app/contactsSlice";

import { logoutError, userAuthenticatedError } from "../app/authenticationSlice";

import { toast } from "react-toastify";

const ToastMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case newContact.type:
      toast.success("New contact is added successfully");
      break;
    case editContact.type:
      toast.success("Contact is edited successfully");
      break;
    case deleteContact.type:
      toast.success("Contact is deleted successfully");
      break;
    case setContactsError.type:
      toast.error("Failed to load contacts");
      break;
    case editContactError.type:
      toast.error("Failed to edit contact");
      break;
    case deleteContactError.type:
      toast.error("Failed to delete contact");
      break;
    case newContactError.type:
      toast.error("Failed to add new contact");
      break;
    case logoutError.type:
      toast.error("Failed to logout"); 
      break;
    case userAuthenticatedError.type:
      toast.error("Failed to login"); 
      break; 
    default:
      break;
  }
  return next(action);
};

export default ToastMiddleware;
