import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Error from "../Error-Page/Error";
import Loading from "../Loading-Page/Loading";
import "./style.css";

function CardDetail({
  name,
  model,
  hyperdrive_rating,
  passengers,
  max_atmosphering_speed,
  manufacturer,
  crew,
  cargo_capacity,
  url = "",
}) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { shipId } = useParams();

  useEffect(() => {
    let ignore = false;
    if (!name) {
      async function fetchFromApi() {
        setLoading(true);
        try {
          const response = await axios(
            `https://swapi.dev/api/starships/${shipId}/?format=json`
          );
          !ignore && setData(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
      fetchFromApi();
    }

    return () => {
      ignore = true;
    };
  }, [name, shipId]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  url = url ? url : data.url;
  const splittedUrl = url?.split("/");
  const shipIdFromUrl = splittedUrl ? splittedUrl[splittedUrl.length - 2] : "";
  const src = `src/images/${name || data.name}.jpg`;
  if (shipIdFromUrl !== shipId) return null;

  return (
    <div className="main-container">
      <div className="card-detail-container">
        <img className="card-detail-image" src={src} alt={name} />

        <div className="card-detail-information">
          <h2>{name || data.name}</h2>
          <h4>
            <span>Model: </span>
            {model || data.model}
          </h4>
          <h4>
            <span>Hyperdrive Rating: </span>
            {hyperdrive_rating || data.hyperdrive_rating}
          </h4>
          <h4>
            <span>Passengers: </span>
            {passengers || data.passengers}
          </h4>
          <h4>
            <span>Max Atmosphering Speed: </span>{" "}
            {max_atmosphering_speed || data.max_atmosphering_speed}
          </h4>
          <h4>
            <span>Manufacturer: </span>
            {manufacturer || data.manufacturer}
          </h4>
          <h4>
            <span>Crew: </span>
            {crew || data.crew}
          </h4>
          <h4>
            <span>Cargo Capacity: </span>
            {cargo_capacity || data.cargo_capacity}
          </h4>
        </div>
        <NavLink to="/">Return Starships List</NavLink>
      </div>
    </div>
  );
}

export default CardDetail;
