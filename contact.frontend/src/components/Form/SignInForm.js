import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignIn } from "../../services/authentication";
import { NavLink } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        SignIn(dispatch, { username, password });
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign In
      </Button>
      <div className="text-center pt-4 text-muted">
        Don't have an account? <NavLink to="/signup"> Sign Up</NavLink>
      </div>
    </Form>
  );
}
