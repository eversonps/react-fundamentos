import ReactDOM from "react-dom"
import React from "react"
import Familia from "./componentes/Familia"
import Membro from "./componentes/Membro"
import ComponenteComFuncao from "./componentes/ComponenteComFuncao"

const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <ComponenteComFuncao></ComponenteComFuncao>
    </div>,
    elemento
)