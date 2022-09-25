import axios from "axios";
import {
  setContacts,
  newContact,
  editContact,
  deleteContact,
  setContactsError,
  newContactError,
  editContactError,
  deleteContactError,
} from "../app/contactsSlice";

//WEB API

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/Contacts`,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    authorization: "Bearer " + sessionStorage.getItem("token"),
  };
  return config;
});

export const GetContacts = async (dispatch) => {
  try {
    //api call
    const { data } = await axiosInstance.get();
    dispatch(setContacts(data));
  } catch (error) {
    dispatch(setContactsError());
  }
};

export const NewContact = async (dispatch, contact) => {
  try {
    //api call
    const { data } = await axiosInstance.post("", contact);
    dispatch(newContact(data));
  } catch (error) {
    dispatch(newContactError());
  }
};

export const EditContact = async (dispatch, contact) => {
  try {
    //api call
    await axiosInstance.put("", contact);
    dispatch(editContact(contact));
  } catch (error) {
    dispatch(editContactError());
  }
};

export const DeleteContact = async (dispatch, contact) => {
  try {
    //api call
    await axiosInstance.delete("", { data: { ...contact } });
    dispatch(deleteContact(contact));
  } catch (error) {
    dispatch(deleteContactError());
  }
};
