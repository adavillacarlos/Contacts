import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice";
import authenticationSlice from "./authenticationSlice";
import ToastMiddleware from "../middlewares/ToastMiddleware";

export const store = configureStore({
  reducer: {
    authenticationSlice: authenticationSlice, 
    contactsSlice: contactsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ToastMiddleware),
});
