import React, {useState} from "react";

export default props => {
    const {number, setNumber} = setNumber(0)
    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={() => contador = contador + 1}> Inc </button>
        </div>
    )
}