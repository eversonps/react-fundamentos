import ReactDOM from "react-dom"
import React from "react"
import Pai from "./componentes/Pai"
import ComponentClasse from "./componentes/ComponenteClasse"

const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <ComponentClasse valor="Olá Classe"></ComponentClasse>
        <Pai></Pai>
    </div>,
    elemento
)