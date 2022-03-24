import React from "react";
import ReactDOM from "react-dom";
import Family from "./family"
import Member from "./member"

ReactDOM.render(
    <Family lastName="Silva">
        <Member name="Joãozinho"></Member>
        <Member name="Mariazinha"></Member>
    </Family>, 
    document.getElementById("app")
)