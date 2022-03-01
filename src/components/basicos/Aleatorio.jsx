import React from "react";

export default (props) => (
    <div>
        <p>O valor sorteado será de {props.valorMin} até {props.valorMax}</p>
        <p><strong>Valor Sorteado</strong>: {Math.round((Math.random() * (props.valorMax - props.valorMin) + props.valorMin))}</p>
    </div>
)