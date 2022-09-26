import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUp } from "../../services/authentication";
import { NavLink } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        SignUp(dispatch, { username, email, password });
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
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
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

      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      <Button
        variant="success"
        type="submit"
        disabled={password !== confirmPassword || password.length <= 0}
      >
        Sign Up
      </Button>
      <div className="text-center pt-4 text-muted">
        Already have an account? <NavLink to="/signin"> Sign In</NavLink>
      </div>
    </Form>
  );
}
