import React from "react";
import { Link, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function CardDetail({
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

  const { shipId } = useParams();
  console.log(shipId);
  return (
    <Routes>
      <Route
        path="/"
        element={
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
              <Link to="/">Return Starships List</Link>
            </div>
          </div>
        }
      />
      <Route path="*" element={<div>404 not found</div>}></Route>
    </Routes>
  );
}

export default CardDetail;
