import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import StarRating from "./StarRating";
import Challenge from "./Challenge";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  const test = "a b c d e f g h";
  console.log(test.split(" ", 3));
  const test2 = test.split(" ", 3).join(" ");
  return (
    <div>
      <StarRating color="blue" maxRating={6} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
	  <p>{test2}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating />
    <StarRating messages={["terrible", "bad", "okay", "good", "amazing"]} />
    <StarRating maxRating={5} color="red" size={34} className="test" defaultRating={5} />
    <Test />
    <Challenge />
  </React.StrictMode>
);
