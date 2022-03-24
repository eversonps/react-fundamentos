import React from "react";

const compA = props => (
    <h1>Primeiro diz: {props.valor}</h1>
)

const compB = props => (
    <h1>Segundo diz: {props.valor}</h1>
)

export { compA, compB }