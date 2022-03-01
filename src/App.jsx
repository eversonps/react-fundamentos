import React from "react"
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import "./App.css"

export default () => (
    <div className="App">
        <h1>Fundamentos React (Arrow)</h1>
        <div className="Cards">
            <Card titulo="#04 - Sorteio" color="#FA6900">
                <Aleatorio valorMax={50} valorMin={10}></Aleatorio>
            </Card>
            
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento /> 
            </Card>
                
            <Card titulo="#02 - Com Parametro" color="#E8B71A">
                <ComParametro titulo="Situação do Aluno" aluno="Mariazinha" nota={9}/>
                <ComParametro titulo="Situação do Aluno" aluno="Joãozinho" nota={3.5}/>
            </Card>
            
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>      
    </div>    
)
