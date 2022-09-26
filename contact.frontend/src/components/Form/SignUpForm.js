import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUp } from "../../services/authentication";
import { NavLink } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { signUpSchema } from "../../middlewares/ValidationMiddleware";
import { toast } from "react-toastify";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      username: e.target[0].value,
      email: e.target[1].value,
      password:e.target[2].value,
      confirmPassword:e.target[3].value
    };
    const isValid = await signUpSchema.isValid(formData);
    isValid
      ? SignUp(dispatch, { username, email, password })
      : toast.warn("Please fill up all the fields");
  };

  return (
    <Form onSubmit={handleSubmit}>
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
