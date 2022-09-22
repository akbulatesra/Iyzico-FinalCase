import React from "react";
import "./style.css";

function OneCard({
  name,
  model,
  hyperdrive_rating,
  passengers,
  max_atmosphering_speed,
  manufacturer,
  crew,
  cargo_capacity,
}) {
  const src = `src/images/${name}.jpg`;
  return (
    <div>
      <img className="card-image" src={src} alt={name} />

      <div className="card-information">
        <h2>{name}</h2>
        <h3>{model}</h3>
        <h3>{hyperdrive_rating}</h3>
      </div>
    </div>
  );
}

export default OneCard;
