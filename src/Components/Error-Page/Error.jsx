import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

//I used NavLink to go back home page

function Error() {
  return (
    <div className="error-container">
      <div className="text-container">
        <h2>404</h2>
        this is <br />
        not the <br />
        page you're <br />
        looking for <br />
        <NavLink to="/">move along</NavLink>
      </div>
      <img
        className="error-image"
        src="../src/assets/error-page-img/error-image.jpg"
        alt="error"
      />
    </div>
  );
}

export default Error;
