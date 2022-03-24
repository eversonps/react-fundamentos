import ReactDOM from "react-dom"
import React from "react"
import Hook from "./componentes/Hook"

const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <Contador numero={0}></Contador>
    </div>,
    elemento
)