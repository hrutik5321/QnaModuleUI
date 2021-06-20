import React from "react";
import "./Base.css";
import Navbar from "./Navbar";
const Base = (props) => {
  return (
    <div className="main">
      <Navbar />

      <div class="container-fluid w-100 h-100 main-container">
        {props.children}
      </div>
    </div>
  );
};

export default Base;
