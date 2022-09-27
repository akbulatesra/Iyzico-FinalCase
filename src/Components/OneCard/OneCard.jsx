import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function OneCard({ name, model, hyperdrive_rating, url }) {
  const src = `src/images/${name}.jpg`;
  const x = url.split("/");
  const shipId = x[x.length - 2];
  return (
    <div>
      <img className="card-image" src={src} alt={name} />

      <div className="card-information">
        <h2>{name}</h2>
        <h3>Model: {model}</h3>
        <h3>Hyperdrive Rating: {hyperdrive_rating}</h3>
        <NavLink
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "1.5vw",
          }}
          to={`/${shipId}`}
        >
          More Details
        </NavLink>
      </div>
    </div>
  );
}

export default OneCard;
