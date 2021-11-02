import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(<h1>Hello Word</h1>, document.getElementById("root"));

const fname = "HARSHAD";
const lname = "SATASIYA";
const currentDate = new Date();

ReactDOM.render(
  <React.Fragment>
    <h1>My Name is {fname} </h1>
    <h1>2 + 3 SUM IS = {3 + 3} </h1>
    <h1>2 + 3 SUM IS = {Math.random()} </h1>
    <h1>Todays Date is : = {currentDate.date} </h1>
    <App></App>
    <p>Hello Word</p>
  </React.Fragment>,
  document.getElementById("root")
);

reportWebVitals();
