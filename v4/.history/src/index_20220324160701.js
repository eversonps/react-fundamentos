import ReactDOM from "react-dom"
import React from "react"
import {CompA, CompB} from "./componentes/DoisComponente"

const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <CompA valor="Olá, eu sou o A!"></CompA>
        <CompB valor="B na área"></CompB>
        <PrimeiroComponente valor="Primeiro Componente!!!!"/>
    </div>,
    elemento
)