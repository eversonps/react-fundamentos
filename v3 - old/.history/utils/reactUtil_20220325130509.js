import React from "react"

function childrenWithProps(props){
     return React.Children.map(props.children, children => {
        return React.cloneElement(children, {...props})
    })
}

export {childrenWithProps}