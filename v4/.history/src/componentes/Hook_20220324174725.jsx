import React, {useEffect, useState} from "react";

export default props => {
    const [contador, setContador] = useState(0)
    const [status, setParOuImpar] = useState("Par")

    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar("Par") : setParOuImpar("Impar")
    })

    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={() => setContador(contador + 1)}> Inc </button>
        </div>
    )
}