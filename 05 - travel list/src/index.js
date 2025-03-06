import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles.css";
import App from "./components/App";
import App2 from "./components/helper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App2 />
  </React.StrictMode>
);
