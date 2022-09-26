import axios from "axios";
import { userAuthenticated, userAuthenticatedError } from "../app/authenticationSlice";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/Authentication`,
});

export const SignUp = async (dispatch, credentials) => {
  try {
    // api call
    const { data } = await axiosInstance.post("/signup", credentials);
    dispatch(userAuthenticated(data));
   
  } catch {
    dispatch(userAuthenticatedError()); 
  }
};

export const SignIn = async (dispatch, credentials) => {
  try {
    const { data } = await axiosInstance.post("/signin", credentials);
    dispatch(userAuthenticated(data));
  } catch (error) {
    dispatch(userAuthenticatedError()); 
  }
};
