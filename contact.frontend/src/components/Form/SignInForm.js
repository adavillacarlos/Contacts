import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignIn } from "../../services/authentication";
import { NavLink } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { signInSchema } from "../../middlewares/ValidationMiddleware";
import { toast } from "react-toastify";

export default function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      username: e.target[0].value,
      password: e.target[1].value,
    };
    const isValid = await signInSchema.isValid(formData);
    isValid
      ?  SignIn(dispatch, { username, password })
      : toast.warn("Please fill up all the fields");
  };

  return (
    <Form
      onSubmit={handleSubmit}
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
