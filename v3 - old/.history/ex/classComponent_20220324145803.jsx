import React, {Component} from "react"

export default class ClassComponent extends Component{
    constructor(props){
        super(props)
        this.state = {value: props.initialValue}
    }

    sum(delta){
        this.setState({value: this.state.value + delta})
    }

    render(){
        this.props.value++
        return (
            <h1>{this.props.value}</h1>
        )
    }
}