import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import OneCard from "../OneCard/OneCard";
import Search from "./Search";

const urls = [
  "https://swapi.dev/api/starships/",
  "https://swapi.dev/api/starships/?page=2",
  "https://swapi.dev/api/starships/?page=3",
  "https://swapi.dev/api/starships/?page=4",
];

function Cards() {
  const [datas, setDatas] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(0);

  useEffect(() => {
    axios
      .get(urls[currentUrl])

      .then((response) => {
        const temp = [...datas, ...response.data.results];
        setDatas(temp);
      });
  }, [currentUrl]);

  const nextPage = () => {
    if (currentUrl <= 3) {
      setCurrentUrl(currentUrl + 1);
    }
  };
  return (
    <div className="cards-container">
      <Search />
      {datas.map((data, index) => {
        return (
          <div className="card-container" key={index}>
            <OneCard {...data} />
          </div>
        );
      })}
      <button onClick={nextPage}>load more</button>
    </div>
  );
}

export default Cards;
