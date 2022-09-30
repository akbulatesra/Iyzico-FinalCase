import React, { useState, useEffect } from "react";
import "./style.css";
import OpeningText from "./OpeningText";
import CompaniesText from "./CompaniesText";
import InformationText from "./InformationText";

function OpeningPage({ openingPage }) {
  const [showOpeningText, setShowOpeningText] = useState(true);
  const [showCompaniesText, setShowCompaniesText] = useState(false);
  const [showInformationText, setInformationText] = useState(false);

  //with this code I show my componenets with an order
  useEffect(() => {
    if (openingPage) {
      setTimeout(() => {
        setShowOpeningText(false);
        setShowCompaniesText(true);
      }, 6000);
      setTimeout(() => {
        setShowCompaniesText(false);
        setInformationText(true);
      }, 12000);
    }
  }, [openingPage]);
  return (
    <div className="container">
      {showOpeningText && <OpeningText />}
      {showCompaniesText && <CompaniesText />}
      {showInformationText && <InformationText />}
    </div>
  );
}

export default OpeningPage;
