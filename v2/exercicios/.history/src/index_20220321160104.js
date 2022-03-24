import React from "react";
import ReactDOM from "react-dom";

import Pai from "./componentes/Pai"
import Filho from "./componentes/Filho"

ReactDOM.render(
    <div>
        <Pai nome="Francisco" sobrenome="Silva"></Pai>
    </div>, 
    document.getElementById("root")
)