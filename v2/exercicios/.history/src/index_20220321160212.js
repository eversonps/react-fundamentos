import React from "react";
import ReactDOM from "react-dom";

import Pai from "./componentes/Pai"
import Filho from "./componentes/Filho"

ReactDOM.render(
    <div>
        <Pai nome="Francisco" sobrenome="Silva">
            <Filho nome="Gabriel" sobrenome="Silva"></Filho>
            <Filho nome="Paulo" sobrenome="Silva"></Filho>
            <Filho nome="Leonardo" sobrenome="Silva"></Filho>
        </Pai>
    </div>, 
    document.getElementById("root")
)