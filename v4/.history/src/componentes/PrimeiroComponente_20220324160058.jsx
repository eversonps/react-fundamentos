import React from "react";

let isLegal = false
export default (props) => (
    <div>
        <h1>{props.valor}</h1>
        <h2>{1 + 1}</h2>
        <p>{isLegal ? "Sim" : "Não"}</p>
    </div>
)



