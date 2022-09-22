import React from "react";

function CardDetail(
  name,
  model,
  hyperdrive_rating,
  passengers,
  max_atmosphering_speed,
  manufacturer,
  crew,
  cargo_capacity
) {
  const src = `src/images/${name}.jpg`;
  return (
    <div>
      <img className="card-image" src={src} alt={name} />

      <div className="card-information">
        <h2>{name}</h2>
        <h3>{model}</h3>
        <h3>{hyperdrive_rating}</h3>
        <h4>{passengers}</h4>
        <h4>{max_atmosphering_speed}</h4>
        <h4>{manufacturer}</h4>
        <h4>{crew}</h4>
        <h4>{cargo_capacity}</h4>
      </div>
    </div>
  );
}

export default CardDetail;
