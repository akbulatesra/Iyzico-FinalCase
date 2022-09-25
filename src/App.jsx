import { useState, useEffect } from "react";
import "./App.css";
import OpeningPage from "./Components/Opening-Page/OpeningPage";
import EnterPage from "./Components/Enter-Page/EnterPage";
// import "./Stars";
import Cards from "./Components/Cards-Page/Cards";

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
    <div class="main-container">
      {/* <Stars createStar={createStar} /> */}
      {showEnterPage && <EnterPage handlePageOpening={handlePageOpening} />}
      {showOpeningPage && !showEnterPage && (
        <OpeningPage openingPage={showOpeningPage} />
      )}
      {!showOpeningPage && !showEnterPage && <Cards />}
    </div>
  );
}

export default App;
