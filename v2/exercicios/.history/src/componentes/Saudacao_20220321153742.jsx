import React, {Component} from "react";

export default class Saudacao extends Component {
    state = {
        tipo: "Fala",
        nome: "Pedro"
    }

    setTipo(e){
        let i = 1
        setInterval(() => {
            
        } 1000)
        this.setState(...state, {tipo: e.target.value})
    }

    setNome(e){
        this.setState(...state, {nome: e.target.value})
    }

    render(){
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}