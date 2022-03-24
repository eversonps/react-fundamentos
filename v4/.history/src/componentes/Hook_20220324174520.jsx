import React, {useState} from "react";

export default props => {
    const [contador, setContador] = useState(0)
    const [status, setParOuImpar] = useState("Par")

    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={() => setContador(contador + 1)}> Inc </button>
        </div>
    )
}