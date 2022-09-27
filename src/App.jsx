import { useState, useEffect } from "react";
import "./App.css";
import OpeningPage from "./Components/Opening-Page/OpeningPage";
import EnterPage from "./Components/Enter-Page/EnterPage";
import "./Stars";
import Cards from "./Components/Cards-Page/Cards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [showOpeningPage, setShowOpeningPage] = useState(false);
  const [showEnterPage, setShowEnterPage] = useState(true);

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
        <Route
          path="/"
          element={
            <div class="main-container">
              {showEnterPage && (
                <EnterPage handlePageOpening={handlePageOpening} />
              )}
              {showOpeningPage && !showEnterPage && (
                <OpeningPage openingPage={showOpeningPage} />
              )}
              {!showOpeningPage && !showEnterPage && <Cards />}
            </div>
          }
        ></Route>
        <Route path="*" element={<div>404 not found</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
