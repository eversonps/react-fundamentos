import React from "react";

export default props => {
    let contador = 3
    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={() => contador++}> Inc</button>
        </div>
    )
}