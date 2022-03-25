import React from "react";
import ReactDOM from "react-dom";
import Field from "./field"
import {combineReducers, createStore} from "redux"

ReactDOM.render(
    <Field initialValue="Teste"></Field>, 
    document.getElementById("app")
)