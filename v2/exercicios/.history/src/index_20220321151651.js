import React from "react";
import ReactDOM from "react-dom";

import { BoaTarde, BoaNoite } from "./componentes/Multiplos"

ReactDOM.render(
    <div>
        <BoaTarde nome="Fulano"></BoaTarde>
        <BoaNoite nome="Fulano"></BoaNoite>
    </div>, 
    document.getElementById("root")
)