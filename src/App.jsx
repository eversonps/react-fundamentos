import React from "react"
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"

export default () => (
    <div id="app">
        <h1>Fundamentos React (Arrow)</h1>
        <Aleatorio valorMax={50} valorMin={10}></Aleatorio>
        <Fragmento />        
        <ComParametro titulo="Segundo Componente" aluno="Mariazinha" nota={9}/>
        <ComParametro titulo="Segundo Componente" aluno="Joãozinho" nota={3.5}/>
        <Primeiro></Primeiro>
    </div>    
)
