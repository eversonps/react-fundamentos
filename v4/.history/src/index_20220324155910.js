import ReactDOM from "react-dom"
import React from "react"
import PrimeiroComponente from "./componentes/PrimeiroComponente"

const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <PrimeiroComponente valor="Primeiro Componente!!!!" aBcD={Math.pow(2, 8)}/>
    </div>,
    elemento
)