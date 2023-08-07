import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Loginapi } from "../../../_services/auth.service";
import Validation from "./validation";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login_api = () => {
  // const history = useNavigate();
  const [InputsValue, setInputsValue] = useState({});
  const [ErrorObject, setErrorObject] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const signup = () => {
    // navigate("/register");
    setTimeout(() => {
      window.location.href = "register";
    }, 100);
  };

  const onChangeInputs = (e) => {
    setErrorObject({});
    setInputsValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = (e) => {
    setErrorObject({});
    // setIsLoding(true)
    e.preventDefault();
    Validation(InputsValue, setErrorObject);
    if (ErrorObject.email || ErrorObject.password) {
      return;
    }
    Loginapi(InputsValue).then((response) => {
      // setIsLoding(false)
      console.log(response, "response");
      if (response?.success) {
        toast.success("login success");
        let data = response?.data;
        let users = response?.data;
        sessionStorage.setItem("role", users?._id);
        sessionStorage.setItem("token_key", data?.token);
        sessionStorage.setItem("users", JSON.stringify(users));
        setTimeout(() => {
          window.location.href = "/";
        }, 100);
      } else {
        setErrorObject((prev) => ({
          ...prev,
          password: "Invalid email or password.",
        }));
      }
    });
  };

  //then check response of api and validate

  return (
    <Container>
      <div className="login">
        <div className="signup">
          <a onClick={signup}>Sign Up</a>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              invalid={ErrorObject?.email ? true : false}
              onChange={(e) => {
                onChangeInputs(e);
                setErrorObject("");
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              invalid={setErrorObject?.password}
              onChange={(e) => {
                onChangeInputs(e);
                setErrorObject("");
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your password with anyone else.
            </Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login_api;
