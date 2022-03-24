import ReactDOM from "react-dom"
import React from "react"
import Hook from "./componentes/Hook"

const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <Hook numero={0}></Hook>
    </div>,
    elemento
)