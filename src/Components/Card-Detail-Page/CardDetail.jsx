import { useState, useEffect } from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
import axios from "axios";
import Error from "../Error-Page/Error";
import Loading from "../Loading-Page/Loading";

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
    <div>
      <img className="card-image" src={src} alt={name} />

      <div className="card-information">
        <h2>{name || data.name}</h2>
        <h3>{model || data.model}</h3>
        <h3>{hyperdrive_rating || data.hyperdrive_rating}</h3>
        <h4>{passengers || data.passengers}</h4>
        <h4>{max_atmosphering_speed || data.max_atmosphering_speed}</h4>
        <h4>{manufacturer || data.manufacturer}</h4>
        <h4>{crew || data.crew}</h4>
        <h4>{cargo_capacity || data.cargo_capacity}</h4>
        <Link to="/">Return Starships List</Link>
      </div>
    </div>
  );
}

export default CardDetail;
