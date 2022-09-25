import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch } from "react-redux";
import { SignIn } from "../services/authentication";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3 p-5">
          <div className="panel border bg-white">
            <div className="panel-heading mt-3">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="panel-body p-3">
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
                  Don't have an account? Sign Up
                </div>
              </Form>
            </div>
            <div className="mx-3 my-2 py-2 bordert">
              <div className="text-center py-3">
                Sign In with <br /> <br />
                <GoogleIcon fontSize="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
