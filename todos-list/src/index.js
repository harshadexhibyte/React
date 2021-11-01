import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Covid from "./components/covid";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Covid />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
