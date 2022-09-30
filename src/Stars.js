import "./App.css";

const numStars = 300;

function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

// I create a starBody for adding my stars. Then I add it to original body. So if window's size change there is no problem. I call this function in here and in App.jsx file with useEffect
const createStar = () => {
  let starBody;
  if (document.getElementById("starBody") === null) {
    starBody = document.createElement("div");
    starBody.id = "starBody";
  } else {
    starBody = document.getElementById("starBody");
    starBody.innerHTML = "";
  }

  for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.className = "star";
    var xy = getRandomPosition();
    star.style.top = xy[0] + "px";
    star.style.left = xy[1] + "px";
    starBody.append(star);
  }
  document.body.append(starBody);
};
createStar();
export default createStar;
