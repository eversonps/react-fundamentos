import React from "react"

export default function ComParametro(props){
    let status = (props.nota >= 6) ? "aprovado" : "de recuperação"
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p><strong>{props.aluno}</strong> tirou nota <strong>{props.nota}</strong> e está {status}</p>
        </div>
    )
}