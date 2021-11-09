import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

function Card(props) {
  return (
    <>
      <div className="card col-md-3 m-5">
        <img
          className="card-img-top p-3"
          src={props.imgsrc}
          alt="Card image cap"
          height="400px"
        />
        <div className="card-body">
          <h5 className="card-title">{props.sname}</h5>
          <p className="card-text">{props.title}</p>
        </div>
        <a className="btn btn-primary m-5" href={props.link}>
          Watch Now
        </a>
      </div>
    </>
  );
}

const SlotM = (props) => {
  let x = "😊";
  let y = "😊";
  let z = "🤪";
  if (props.x === props.y && props.y === props.z) {
    return (
      <>
        <hr></hr>
        <h1 className="text-center">
          {props.x}
          {props.y}
          {props.z}
        </h1>
        <h1 className="text-center">This is Matching</h1>
        <hr></hr>
      </>
    );
  } else {
    return (
      <>
        <h1 className="text-center">
          {props.x}
          {props.y}
          {props.z}
        </h1>
        <h1 className="text-center">This Not Matching</h1>
        <hr></hr>
      </>
    );
  }
};

let count = 0;
// const state = useState();
// const [count] = useState(1);
const IncNum = () => {
  count = count++;
  console.log("Clicked" + count++);
};

ReactDOM.render(
  <React.StrictMode>
    <>
      <div>
        <h1 className="text-center mt-5 ">TOP 6 NETFLIX SERIES</h1>
      </div>
      <div className="row">
        <Card
          imgsrc="https://i.pinimg.com/originals/67/5e/bc/675ebc2fd210a8bd5362928a51514960.jpg"
          title="Original netlix series"
          sname="DART"
          link="https://www.netflix.com/in/browse/genre/839338"
        />
        <Card
          imgsrc="https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg"
          title="Original netlix series"
          sname="MONEY HEIST"
          link="https://www.netflix.com/in/title/80192098"
        />
        <Card
          imgsrc="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
          title="Original netlix series"
          sname="LUCIFER"
          link="https://www.netflix.com/in/title/80057918"
        />
        <Card
          imgsrc="https://m.media-amazon.com/images/M/MV5BYTk0Nzk5ZWYtYTNlZi00YjBjLWJhYjctMWMwMmYyMDA5ZjJmXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_.jpg"
          title="Original netlix series"
          sname="IT'S OKY TO NOT BE OKY"
          link="https://www.netflix.com/in/title/81243992"
        />
        <Card
          imgsrc="https://m.media-amazon.com/images/M/MV5BZWI4NjY1MmQtN2QwNS00YTQwLWJlNDItMjZjMjE1ODk3MzI4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg"
          title="Original netlix series"
          sname="LITTELE THINGS"
          link="https://www.netflix.com/in/title/81011159"
        />
        <Card
          imgsrc="https://m.media-amazon.com/images/M/MV5BN2IyYzI4YmQtNzBmMi00Mjg3LWI4NTMtNmZjNjk3YjIwZmJhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
          title="Original netlix series"
          sname="CATE"
          link="https://www.netflix.com/in/title/80216200"
        />
      </div>
      <SlotM x="😀" y="😀" z="😀" />
      <SlotM x="😀" y="😎" z="😀" />
      <SlotM x="😀" y="😀" z="😣" />
      <SlotM x="🦉" y="🦉" z="🦉" />

      <div className="text-center">
        <h2>{count}</h2>
        <button className="btn btn-primary" onClick={IncNum}>
          Click me
        </button>
      </div>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
