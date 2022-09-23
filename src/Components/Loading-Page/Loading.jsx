import React from "react";
import "./style.css";
import loading from "/Users/esraakbulat/Desktop/Iyzico-FinalCase/src/assets/loading-page-gif/loading.gif";

function Loading() {
  return (
    <div className="loading-page">
      <img src={loading} alt="loading" />
    </div>
  );
}

export default Loading;
