import React, {Component} from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { changeValue } from "./fieldActions"

class Field extends Component{
    render(){
        return (
            <div>
                <label>{this.props.value}</label><br/>
                <input type="text" onChange={this.props.changeValue} value={this.props.value}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(state){
    return bindActionCreators({ changeValue }, dispatch)
}


export default connect(mapStateToProps)(Field)