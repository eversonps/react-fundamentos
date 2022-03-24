import React from "react";
import ReactDOM from "react-dom";
import Family from "./family"
import Member from "./member"

ReactDOM.render(
    <Family>
        <Member name="Joãozinho" lastName="Silva"></Member>
        <Member name="Mariazinha" lastName="Silva"></Member>
    </Family>, 
    document.getElementById("app")
)