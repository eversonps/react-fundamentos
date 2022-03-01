import "./index.css"
import ReactDOM from "react-dom"
import React from "react"
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="Segundo Componente" aluno="Mariazinha" nota={9}/>
        <ComParametro titulo="Segundo Componente" aluno="Joãozinho" nota={3.5}/>
    </div>, 
    document.querySelector("#root")
)