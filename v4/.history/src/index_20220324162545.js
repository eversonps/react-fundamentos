import ReactDOM from "react-dom"
import React from "react"
import Familia from "./componentes/Familia"
import Membro from "./componentes/Membro"

const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <Familia sobrenome="Silva">
            <Membro nome="João" ></Membro>
            <Membro nome="Maria"></Membro>
            <Membro nome="Guilherme"></Membro>
        </Familia>

        <Familia sobrenome="Silva">
            <Membro nome="João" ></Membro>
            <Membro nome="Maria"></Membro>
            <Membro nome="Guilherme"></Membro>
        </Familia>
    </div>,
    elemento
)