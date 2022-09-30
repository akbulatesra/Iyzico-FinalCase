import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import OneCard from "../OneCard/OneCard";
import Search from "./Search";
import Loading from "../Loading-Page/Loading.jsx";
import { Route, Routes } from "react-router-dom";
import CardDetail from "../Card-Detail-Page/CardDetail";

function Cards() {
  const [urls, setUrls] = useState(["https://swapi.dev/api/starships/"]);
  const [datas, setDatas] = useState([]);
  // we have different pages for datas so I add them on a array and call them with currentUrl
  const [currentUrl, setCurrentUrl] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDisabledLoadMoreButton, setIsDisabledLoadMoreButton] =
    useState(false);
  const [lastIndex, setLastIndex] = useState(0);

  // I call my datas with axios
  const awaitDatas = async () => {
    setLoading(true);
    try {
      const response = await axios.get(urls[currentUrl]);
      const temp = [...datas, ...response.data.results];
      if (response.data.next === null) setIsDisabledLoadMoreButton(true);

      //if there is more data I upload urls and datas
      response.data.next &&
        setUrls((prev) => [...new Set([...prev, response.data.next])]);
      setDatas(temp);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //I use this code for scrolling
  useEffect(() => {
    if (!loading) {
      lastIndex &&
        document
          .querySelector(`.card-container-${lastIndex}`)
          ?.scrollIntoView(false);
    }
  }, [loading]);

  //when currentUrl change I call the awaitDatas function
  useEffect(() => {
    awaitDatas();
  }, [currentUrl]);

  const nextPage = () => {
    setLastIndex([...document.querySelectorAll(".card-container")].length - 1);
    if (currentUrl <= 3) {
      setCurrentUrl(currentUrl + 1);
    }
  };

  // Filtered datas array
  const filteredData = searchQuery.length
    ? datas.filter(
        (data) =>
          data.name.toLowerCase().includes(searchQuery) ||
          data.model.toLowerCase().includes(searchQuery)
      )
    : datas;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <div className="cards-container">
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
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
          }
        />
        <Route
          path=":shipId"
          element={datas.map((data, index) => {
            return <CardDetail key={index} {...data} />;
          })}
        />
      </Routes>
    );
  }
}

export default Cards;
