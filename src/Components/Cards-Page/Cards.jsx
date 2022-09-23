import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import OneCard from "../OneCard/OneCard";
import Search from "./Search";
import Loading from "../Loading-Page/Loading";

const urls = [
  "https://swapi.dev/api/starships/",
  "https://swapi.dev/api/starships/?page=2",
  "https://swapi.dev/api/starships/?page=3",
  "https://swapi.dev/api/starships/?page=4",
];

function Cards() {
  const [datas, setDatas] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const awaitDatas = async () => {
    setLoading(true);
    try {
      const response = await axios.get(urls[currentUrl]);
      const temp = [...datas, ...response.data.results];
      setDatas(temp);
      setLoading(false);
    } catch (error) {}
    setLoading(false);
    console.log(error);
  };

  useEffect(() => {
    awaitDatas();
  }, [currentUrl]);

  const nextPage = () => {
    if (currentUrl <= 3) {
      setCurrentUrl(currentUrl + 1);
    }
  };
  const filteredData = searchQuery.length
    ? datas.filter((data) => data.name.toLowerCase().includes(searchQuery))
    : datas;
  if (loading) {
    <Loading />;
  } else {
    return (
      <div className="cards-container">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {filteredData.map((data, index) => {
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
}

export default Cards;
