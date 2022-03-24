import React, {Component} from "react";

export default class Contador extends Component{
    /* constructor(props){
        super(props)
        this.maisUm = this.maisUm.bind(this)
    } */

    state = {
        numero: this.props.numero
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
    }

    menosUm = () => {
        this.setState({numero: this.state.numero - 1})
    }

    alterar = diferenca => {
        this.setState({numero: this.state.numero + diferenca})
    }


    render(){
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterar(10)}>Inc 10</button>
                <button onClick={() => this.alterar(-10)}>Dec 10</button>
            </div>
        )
    }
}