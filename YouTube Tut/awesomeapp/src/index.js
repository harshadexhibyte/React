import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Heading from "./components/Heading";
import reportWebVitals from "./reportWebVitals";
import { add, sub, div, mult } from "./components/Calc";
import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.render(<h1>Hello Word</h1>, document.getElementById("root"));

const fname = "Harshad";
const lname = "Satasiya";
const currentDate = new Date();
const img1 = "https://picsum.photos/seed/picsum/200/300";
const currentHours = currentDate.getHours();
let greetings = "";
if (currentDate >= 1 && currentDate < 12) {
  greetings = "Good Morning";
} else if (currentDate >= 12 && currentDate < 19) {
  greetings = "Good Afternoon";
} else {
  greetings = "Good Night";
}

function card() {
  return (
    <>
      <div className="card-deck">
        <div className="card col-md-3">
          <img
            className="card-img-top"
            src="https://picsum.photos/seed/picsum/20/30"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Netfilx Original Series</p>
          </div>
        </div>
      </div>
    </>
  );
}
ReactDOM.render(
  <React.Fragment>
    <h1 className="text-center">TOP 5 Series</h1>
      
    {/*<Heading></Heading>
    <h1>Hello {greetings}</h1>
    <ul>
      <li>Sum of Two Number is : {add(3, 5)} </li>
      <li>sub of Two Number is : {sub(3, 5)} </li>
      <li>Div of Two Number is : {div(5, 3)}</li>
      <li>Mult of Two Number is : {mult(3, 5)}</li>
    </ul>

     <h1 className="heading">My name is {fname}</h1>
    <div className="images">
      <img src={img1} />
      <img src={img1} />
      <img src={img1} />
    </div> */}
    {/* <h1>My Name is {fname} </h1>
    <h1>2 + 3 SUM IS = {3 + 3} </h1>
    <h1>2 + 3 SUM IS = {Math.random()} </h1>
    <h1>
      Todays Date is : = {currentDate.getDate()} - {currentDate.getMonth()} -{" "}
      {currentDate.getYear()}
    </h1>
    <h1>Todays Date is : = {currentDate.toLocaleDateString()}</h1>
    <h1> Time Now is : = {currentDate.toLocaleTimeString()}</h1>
    <img src={img1} />
    <img src={img1} />
    <img src={img1} />
    <img src={img1} />
    <img src={img1} /> 
     <App></App> 
    <input type="text" name="fullName" value="Harshad Satasiya"></input>*/}
    <card />
    <card />
    <card />
  </React.Fragment>,
  document.getElementById("root")
);

reportWebVitals();
