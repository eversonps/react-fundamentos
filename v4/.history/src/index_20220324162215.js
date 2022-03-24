import ReactDOM from "react-dom"
import React from "react"
import {CompA, CompB} from "./componentes/DoisComponentes"
import MultiElementos from "./componentes/MultiElementos"
import FamiliaSilva from "./componentes/FamiliaSilva"

const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <FamiliaSilva></FamiliaSilva>
    </div>,
    elemento
)