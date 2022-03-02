import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props=> {
    return(
        <div>
            <FamiliaMembro nome="João" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="Maria" {...props}></FamiliaMembro>
            <FamiliaMembro nome="Gustavo" sobrenome="Silva"></FamiliaMembro>
        </div>     
    )
}