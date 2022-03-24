import React from "react"

function childrenWithProps(children, props){
    React.Children.map(props.children, children => {
        return React.cloneElement(children, {...props})
    })
}

export childrenWithProps