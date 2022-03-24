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
        this.setState({numero: this.state.numero++})
    }

    render(){
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
            </div>
        )
    }
}