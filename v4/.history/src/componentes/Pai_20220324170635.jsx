import React from "react";
import Filho from "./Filho";

export default props => {
    let lugarInformado = "Sem"
    const notificarSaida = lugar => alert(`Liberado para ${lugar}`)
    
    return(
        <div>
            {lugarInformado}
            <Filho notificarSaida={notificarSaida}></Filho>
        </div>
    )
}