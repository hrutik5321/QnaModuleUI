import React from "react";
import { Link, Redirect } from "react-router-dom";
import { signout } from "../Backend/authapicalls";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/signup">
              signup
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/signin">
              signin
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link"
              to="/"
              onClick={() => {
                signout(() => {
                  <Redirect to="/" />;
                });
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
