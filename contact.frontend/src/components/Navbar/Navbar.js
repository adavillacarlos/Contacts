import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Nav } from "react-bootstrap";
import { logout } from "../../app/authenticationSlice";

export default function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.authenticationSlice);
  const dispatch = useDispatch();
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">
          <b>My Contacts</b>
        </span>

        {isLoggedIn && (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Button
                className="nav-link"
                href="/signin"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
              </Button>
            </li>
          </ul>
        )}
      </div>
    </Nav>
  );
}
