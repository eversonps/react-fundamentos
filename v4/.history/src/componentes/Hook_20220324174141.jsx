import React, {useState} from "react";

export default props => {
    const {contador, setContador} = setcontador(0)
    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={() => setContador(contador++)}> Inc </button>
        </div>
    )
}