import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";


function ControlComponent() {
    const [name,setName] = useState("");
    const [fullName,setFullName] = useState();
    const inputEvent = (event) =>{
        console.log(event.target.value)
        setName(event.target.value)
    }
    const onSubmit = () =>{
        setFullName({name})
    }
    return(
        <>
        <form>
            <div className="margin-element" >
                <h1>Hello {name} WelCome</h1>
                <input className="text-box" onChange={inputEvent} type="text" defaultValue=""></input>
                <button onClick="{onSubmit}" class="btn-event">Click Me ✌</button>
            </div>
        </form>
        </>
    );
}

export default ControlComponent;


