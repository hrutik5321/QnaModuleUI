import React, { useState } from "react";
import Base from "../../../layouts/Base";
import "./Signup.css";
import { signup } from "../../../Backend/authapicalls";
import { Link } from "react-router-dom";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const SignUpForm = () => {
    return (
      <div class="contaner bg-light">
        <div className="clone-1"></div>
        <div className="clone-2"></div>
        <div className="clone-3"></div>
        <div class="main-form">
          <div class="form-left text-center text-white">
            <h1 class="text-center">Welcome To Qna Section</h1>
            <h1 class="text-center">Signup Here</h1>
          </div>
          <div class="form-right position-relative">
            <h2 class="text-center pt-3 main-head">Signup Here</h2>
            {error && (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {success && (
              <div class="alert alert-success" role="alert">
                Account Created Successfully. Please{" "}
                <Link to="/signin">Login Here</Link>
              </div>
            )}
            <form class="p-4">
              <div class="form-group">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    onChange={handleChange("name")}
                    placeholder="Enter Your Name"
                    value={name}
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    className="form-control"
                    onChange={handleChange("email")}
                    placeholder="Enter Your Email"
                    type="email"
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
            <div
              onClick={onSubmit}
              class="main-button text-center position-absolute signup-btn p-2"
            >
              Signup
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <Base>{SignUpForm()}</Base>;
};

export default Signup;
