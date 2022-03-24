import ReactDOM from "react-dom"
import React from "react"
import {CompA, CompB} from "./componentes/PrimeiroComponente"

const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <PrimeiroComponente valor="Primeiro Componente!!!!"/>
    </div>,
    elemento
)