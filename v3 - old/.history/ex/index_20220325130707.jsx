import React from "react";
import ReactDOM from "react-dom";
import Field from "./field"
import {combineReducers, createStore} from "redux"
import {Provider} from "react-redux"


const reducers = combineReducers({
    field: () => ({value: "opa"}) 
})
ReactDOM.render(
    <Field initialValue="Teste"></Field>, 
    document.getElementById("app")
)