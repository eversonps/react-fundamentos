import ReactDOM from "react-dom"
import React from "react"
import Contador from "./componentes/Contador"

const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <Contador numero={0}></Contador>
    </div>,
    elemento
)