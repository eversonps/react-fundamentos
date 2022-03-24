import ReactDOM from "react-dom"
import React from "react"
import {CompA, CompB} from "./componentes/DoisComponentes"
import MultiElementos from "./componentes/MultiElementos"
import Familia from "./componentes/Familia"

const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <Familia>
            <Membro nome="João" sobrenome="Silva"></Membro>
            <Membro nome="Maria" sobrenome="Silva"></Membro>
            <Membro nome="Guilherme" sobrenome="Silva"></Membro>
        </Familia>
    </div>,
    elemento
)