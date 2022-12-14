import React from "react";
import DebouncedComponent from "./DebouncedComponent";

const Counter = ({ count }) => {
    console.log("Rendered")
    return (
        <div> {`Count is: ${count}`} </div>
    ) 
}


export default DebouncedComponent(Counter, 1000);
