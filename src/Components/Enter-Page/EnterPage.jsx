import React from "react";
import useSound from "use-sound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

//when I click the button enter function calling and my music start. Also I call handlePageOpening function. It is on App.jsx file.

function EnterPage({ handlePageOpening }) {
  const [play, { stop }] = useSound(
    "src/assets/star-wars-intro/Star Wars Intro.mp3"
  );
  const enterFunction = () => {
    play();
    handlePageOpening();
  };
  return (
    <div className="enter-page">
      <h1>welcome</h1>
      <h3>please click to door to enter the this awesome website</h3>
      <button onClick={enterFunction} className="button-door">
        <FontAwesomeIcon icon={faDoorClosed} className="icon-door" />
      </button>
    </div>
  );
}

export default EnterPage;
