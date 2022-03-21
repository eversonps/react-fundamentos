import React from "react";
import ReactDOM from "react-dom";

import Saudacao from "./componentes/Saudacao"

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
    </div>, 
    document.getElementById("root")
)