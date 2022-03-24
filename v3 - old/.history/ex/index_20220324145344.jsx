import React from "react";
import ReactDOM from "react-dom";
import ClassComponent from "./classComponent"
ReactDOM.render(
    <Family lastName="Silva">
        <Member name="Joãozinho"></Member>
        <Member name="Mariazinha"></Member>
    </Family>, 
    document.getElementById("app")
)