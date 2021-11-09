import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

let newTime = new Date().toLocaleTimeString();
// const [ctime, setCtime] = useState(newTime);
// const updateTime = () => {
//   let newCTime = new Date().toLocaleTimeString();
//   const [ctime, setCtime] = useState(newTime);

//   setCtime(newTime);
// };
function App() {
  return (
    <>
      <div className="text-center margin-element">
        <label></label>
        <br />
        <button onClick="" class="btn-event">
          get time
        </button>
      </div>
    </>
  );
}

export default App;
