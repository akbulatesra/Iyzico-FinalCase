import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import OneCard from "../OneCard/OneCard";
import Search from "./Search";
import Loading from "../Loading-Page/Loading.jsx";

function Cards() {
  const [urls, setUrls] = useState(["https://swapi.dev/api/starships/"]);
  const [datas, setDatas] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDisabledLoadMoreButton, setIsDisabledLoadMoreButton] =
    useState(false);
  const [lastIndex, setLastIndex] = useState(0);

  const awaitDatas = async () => {
    setLoading(true);
    try {
      const response = await axios.get(urls[currentUrl]);
      const temp = [...datas, ...response.data.results];
      if (response.data.next === null) setIsDisabledLoadMoreButton(true);
      response.data.next &&
        setUrls((prev) => [...new Set([...prev, response.data.next])]);
      setDatas(temp);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      lastIndex &&
        document
          .querySelector(`.card-container-${lastIndex}`)
          ?.scrollIntoView(false);
    }
  }, [loading]);

  useEffect(() => {
    awaitDatas();
  }, [currentUrl]);

  const nextPage = () => {
    setLastIndex([...document.querySelectorAll(".card-container")].length - 1);
    if (currentUrl <= 3) {
      setCurrentUrl(currentUrl + 1);
    }
  };
  const filteredData = searchQuery.length
    ? datas.filter((data) => data.name.toLowerCase().includes(searchQuery))
    : datas;

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    console.log(loading);
    return (
      <div className="cards-container">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {filteredData.map((data, index) => {
          return (
            <div
              className={`card-container card-container-${index}`}
              key={index}
            >
              <OneCard {...data} />
            </div>
          );
        })}
        <button
          className="load-more-button"
          disabled={isDisabledLoadMoreButton}
          onClick={nextPage}
        >
          load more
        </button>
      </div>
    );
  }
}

export default Cards;
