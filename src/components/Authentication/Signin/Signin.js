import React, { useState } from "react";
import Base from "../../../layouts/Base";
import "./Signin.css";
import {
  signin,
  isAutheticated,
  authenticate,
} from "../../../Backend/authapicalls";
import { Redirect } from "react-router";
const Signin = () => {
  const [values, setValues] = useState({
    email: "hrutik@gmail.com",
    password: "123456",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/" />;
      }
    }
  };

  const signInForm = () => {
    return (
      <div class="contaner bg-light">
        <div className="clone-1"></div>
        <div className="clone-2"></div>
        <div className="clone-3"></div>
        <div class="main-form">
          <div class="form-left text-center text-white">
            <h1 class="text-center">Welcome To Qna Section</h1>
            <h1 class="text-center">Signin Here</h1>
          </div>
          <div class="form-right position-relative">
            <h2 class="text-center pt-3 main-head">Signin Here</h2>
            {error && (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {loading && (
              <div class="alert alert-success" role="alert">
                Loading...
              </div>
            )}
            <form class="p-4">
              <div class="form-group">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Your Email"
                    onChange={handleChange("email")}
                    value={email}
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  Password
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    onChange={handleChange("password")}
                    value={password}
                  />
                </div>
              </div>
            </form>
            <button
              onClick={onSubmit}
              class="main-button text-center position-absolute signup-btn p-2"
            >
              Signin
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Base>
      {signInForm()}
      {performRedirect()}
    </Base>
  );
};

export default Signin;
