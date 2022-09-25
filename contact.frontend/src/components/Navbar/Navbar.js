import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import { logout } from "../../app/authenticationSlice";

export default function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.authenticationSlice);
  const dispatch = useDispatch();

  return (
    <Nav className="navbar" style={{ backgroundColor: "gray" }}>
      <h1>My Contacts</h1>
      {isLoggedIn ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="link"
            href="/signin"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Log out
          </Button>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <NavLink to="/signup"> Sign Up</NavLink>
          <NavLink to="/signin" style={{ marginLeft: "1rem" }}>
            {" "}
            Sign In
          </NavLink>
        </div>
      )}
    </Nav>
  );
}
