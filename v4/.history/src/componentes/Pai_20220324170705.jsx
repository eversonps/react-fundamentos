import React from "react";
import Filho from "./Filho";

export default props => {
    let lugarInformado = "Nenhum"
    const notificarSaida = lugar => lugarInformado = lugar)
    
    return(
        <div>
            {lugarInformado}
            <Filho notificarSaida={notificarSaida}></Filho>
        </div>
    )
}