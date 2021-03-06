import React, {Component} from "react"

class Field extends Component{
    constructor(props){
        super(props)
        this.state = { value: undefined}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render(){
        return (
            <div>
                <label>{this.state.value}</label><br/>
                <input type="text" value={this.state.value}/>
            </div>
        )
    }
}

export default Field