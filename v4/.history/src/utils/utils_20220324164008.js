import React from "react";

export function filhosComProps(){
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {...props})
    })
}