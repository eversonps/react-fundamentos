import React, {Component} from "react";

export default class Contador extends Component{
    maisUm(){
        
    }

    render(){
        return (
            <div>
                <div>Número: {this.props.numero}</div>
                <button>Inc</button>
                <button>Dec</button>
            </div>
        )
    }
}