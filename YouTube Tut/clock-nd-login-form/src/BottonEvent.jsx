import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const BottonEvent = () =>  {
const blue = "#000000"; 
const [clr , setClr] = useState(blue);
const [name , setName] = useState("Click Me");

const cngBtn = () =>{
let newClr = "#rgyggd"
setClr(newClr)
setName("Ouchh!")
}
    return(
        <>
        <div className="margin-element" >
            <button onClick={cngBtn} style={{ backgroundColor:clr}} class="btn-event">{name}</button>
        </div>
        </>
    );
}
export default BottonEvent;