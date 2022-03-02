import React from "react";
import If, {Else} from "./if";

export default props=>{
    const usuario = props.usuario || {}
    return(
        <div>
            <If test={usuario && usuario.nome}>
                <span>Seja bem vindo {usuario.nome}</span>
                <Else>
                    <span>Seja bem vindo amigão</span>
                </Else>
            </If>     
        </div>
    )
}