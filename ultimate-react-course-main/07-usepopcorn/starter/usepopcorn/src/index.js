import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
// import App2 from './App2';
// import StarRating from "./StarRating";
// import Challenge from "./Challenge";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={6} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
	<App /> 
    {/* <App2 /> */}
    {/* <StarRating />
    <StarRating messages={["terrible", "bad", "okay", "good", "amazing"]} />
    <StarRating maxRating={5} color="red" size={34} className="test" defaultRating={5} /> */}
    {/* <Test />
    <Challenge /> */}
  </React.StrictMode>
);
