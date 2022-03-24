import React from "react";
import ReactDOM from "react-dom";
import ClassComponent from "./classComponent"

ReactDOM.render(
    <ClassComponent initialValue={0} label="Contador"></ClassComponent>, 
    document.getElementById("app")
)