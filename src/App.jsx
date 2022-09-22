import { useState, useEffect } from "react";
import "./App.css";
import OpeningPage from "./Components/Opening-Page/OpeningPage";
import EnterPage from "./Components/Enter-Page/EnterPage";
import "./Stars";
import Cards from "./Components/Cards-Page/Cards";
import InformationText from "./Components/Opening-Page/InformationText";
import CardDetail from "./Components/Card-Detail-Page/CardDetail";

function App() {
  const [showOpeningPage, setShowOpeningPage] = useState(false);
  const [showEnterPage, setShowEnterPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowOpeningPage(false);
    }, 22000);
  }, []);
  const handlePageOpening = () => {
    setShowEnterPage(false);
    setShowOpeningPage(true);
  };
  return (
    <>
      {showEnterPage && <EnterPage handlePageOpening={handlePageOpening} />}
      {showOpeningPage && !showEnterPage && (
        <OpeningPage openingPage={showOpeningPage} />
      )}
      {!showOpeningPage && !showEnterPage && <Cards />}
    </>
  );
}

export default App;
