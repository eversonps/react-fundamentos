import React, {Component} from "react"

export default class ClassComponent extends Component{
    render(){
        this.props.value++
        return (
            <h1>{this.props.value}</h1>
        )
    }
}