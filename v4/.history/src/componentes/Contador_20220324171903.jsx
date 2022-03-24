import React, {Component} from "react";

export default class Contador extends Component{
    constructor(props){
        super(props)
        this.maisUm = this.maisUm.bind(this)
    }

    maisUm(){
        this.props.numero++
    }

    render(){
        return (
            <div>
                <div>Número: {this.props.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button>Dec</button>
            </div>
        )
    }
}