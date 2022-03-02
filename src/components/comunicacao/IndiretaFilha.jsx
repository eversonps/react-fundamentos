import React from "react"

export default props=>{
    return (
        <div>
            <div>Filho</div>
            <button onClick={()=>props.quandoClicar("João", 12, true)}>Fornecer Informações</button>
        </div>
    )
}