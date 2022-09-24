import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice";
import ToastMiddleware from "../middlewares/ToastMiddleware";
export const store = configureStore({
  reducer: {
    contactsSlice: contactsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ToastMiddleware),
});
