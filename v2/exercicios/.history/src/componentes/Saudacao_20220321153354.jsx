import React, {Component} from "react";

export default class Saudacao extends Component {
    state = {
        tipo: "Fala",
        nome: "Pedro"
    }

    setTipo(e){
        this.setState(...state, {tipo: e.target.value})
    }

    setNome(e){
        this.setState(...state, {nome: e.target.value})
    }

    render(){
        const { tipo, nome } = this.props
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={nome}/>
            </div>
        )
    }
}