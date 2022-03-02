import React from "react"
import IndiretaFilha from "./IndiretaFilha"

export default props=>{
    function fornecerInformacoes(nome, idade, nerd){
        console.log(nome, idade, nerd)
    }

    return (
        <div>
            <div>Pai</div>
            <IndiretaFilha quandoClicar={fornecerInformacoes}></IndiretaFilha>
        </div>
    )
}