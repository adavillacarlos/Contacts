import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { userAuthenticated } from "./app/authenticationSlice";
import Navbar from "./components/Navbar/Navbar";

import ContactsPage from "./containers/ContactsPage";
import ErrorPage from "./containers/ErrorPage";
import SignInPage from "./containers/SignInPage";
import SignUpPage from "./containers/SignUpPage";

function App() {
  const { isLoggedIn } = useSelector((state) => state.authenticationSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token !== undefined && token !== null) {
      dispatch(userAuthenticated({ token }));
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={isLoggedIn ? <ContactsPage /> : <SignInPage />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/" /> : <SignUpPage />}
        />
        <Route
          path="/signin"
          element={isLoggedIn ? <Navigate to="/" /> : <SignInPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
