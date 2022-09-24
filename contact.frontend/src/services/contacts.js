import axios from "axios";
import {ActionCreators} from "../app/contactsReducer";

//WEB API

const axiosInstance = axios.create({
  baseURL: "https://localhost:44342/Contacts",
});

export const GetContacts = async (dispatch) => {
  try {
    //api call
    const { data } = await axiosInstance.get();
    dispatch(ActionCreators.setContacts(data));
  } catch (error) {
    console.log("Error");
  }
};

export const NewContact = async (dispatch, contact) => {
  try {
    //api call
    const { data } = await axiosInstance.post('', contact);
    dispatch(ActionCreators.newContact(data));
  } catch (error) {
    console.log(error);
  }
};

export const EditContact = async (dispatch, contact) => {
  try {
    //api call
    await axiosInstance.put('', contact);
    dispatch(ActionCreators.editContact(contact));
  } catch (error) {
    console.log("Error");
  }
};

export const DeleteContact = async (dispatch, contact) => {
  try {
    //api call
    await axiosInstance.delete('', {data: {...contact}});
    dispatch(ActionCreators.deleteContact(contact));
  } catch (error) {
    console.log("Error");
  }
};
