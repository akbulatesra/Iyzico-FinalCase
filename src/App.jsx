import { useState, useEffect } from "react";
import "./App.css";
import OpeningPage from "./Components/Opening-Page/OpeningPage";
import EnterPage from "./Components/Enter-Page/EnterPage";
import createStar from "./Stars";
import Cards from "./Components/Cards-Page/Cards";
import Error from "./Components/Error-Page/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardDetail from "./Components/Card-Detail-Page/CardDetail";

function App() {
  const [showOpeningPage, setShowOpeningPage] = useState(false);
  const [showEnterPage, setShowEnterPage] = useState(true);

  //with this code I create my stars when window size changing
  useEffect(() => {
    window.addEventListener("resize", () => {
      createStar();
    });
    return () => {
      window.removeEventListener("resize", () => {
        screenSize.current = window.innerWidth;
      });
    };
  }, []);

  //with this code I show my componenets with an order
  useEffect(() => {
    if (showOpeningPage) {
      setTimeout(() => {
        setShowOpeningPage(false);
      }, 22000);
    }
  }, [showOpeningPage]);

  const handlePageOpening = () => {
    setShowEnterPage(false);
    setShowOpeningPage(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":shipId" element={<CardDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );

  function Main() {
    return (
      <div className="main-container">
        {showEnterPage && <EnterPage handlePageOpening={handlePageOpening} />}
        {showOpeningPage && !showEnterPage && (
          <OpeningPage openingPage={showOpeningPage} />
        )}
        {!showOpeningPage && !showEnterPage && <Cards />}
      </div>
    );
  }
}

export default App;
